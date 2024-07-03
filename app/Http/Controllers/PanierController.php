<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;
use App\Models\Panier;
use App\Models\PanierProduit;
use App\Models\Product;

class PanierController extends Controller
{
    

    // Ajouter un produit au panier
    public function ajouterProduit(Request $request)
    {
        // Retrieve input data
        $idClient = $request->input('id_client');
        $idProduit = $request->input('id_produit');
        $quantite = $request->input('quantite');
    
        // Validate input data (optional)
        if (!$idClient || !$idProduit || !$quantite) {
            return response()->json(['success' => false, 'message' => 'Invalid input data'], 400);
        }
    
        // Check if cart exists for the client
        $panier = Panier::where('id_client', $idClient)->first();
    
        if (!$panier) {
            // Create cart if it doesn't exist
            $panier = Panier::create(['id_client' => $idClient, 'date_creation' => now()]);
        }
    
        // Check if product is already in cart
        $produitDansPanier = PanierProduit::where('id_produit', $idProduit)
            ->where('id_panier', $panier->id)
            ->first();
    
        if ($produitDansPanier) {
            // Update quantity of existing product
            $produitDansPanier->increment('quantite', $quantite);
        } else {
            // Add new product to cart
            PanierProduit::create([
                'id_panier' => $panier->id,
                'id_produit' => $idProduit,
                'quantite' => $quantite,
            ]);
        }
    
    
        // Return success response
        return response()->json(['success' => true, 'message' => 'Produit ajouté au panier avec succès']);
    }
    
     
    public function ajouterlike(Request $request)
    {
        $product = Product::find($request->id_pr);
        $product->increment('likes_count');
        return response()->json(['likes_count' => $product->likes_count]);
    }

    // Supprimer un produit du panier
    public function supprimerProduit($idPanierProduit)
    {
        $panierProduit = PanierProduit::find($idPanierProduit);
        // Vérifier si le panierProduit existe
        if (!$panierProduit) {
            return response()->json(['message' => 'Produit du panier introuvable'], 404);
        }

        $panier = $panierProduit->panier;
        // Mettre à jour le total du panier
        $panier->total -= $panierProduit->product->prix * $panierProduit->quantite;
        $panier->save();

        $panierProduit->delete();

        return response()->json(['message' => 'Produit du panier supprimé avec succès']);
    }
}
