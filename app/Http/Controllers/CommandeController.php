<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Commande;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CommandeController extends Controller
{
    public function afficherCommandes()
    {
        $commandes = Commande::with(['panier.panierProduits.product', 'panier.client'])->get();
        return response()->json(['commandes' => $commandes]);
    }

    public function createOrder(Request $request)
    {
        // Validation des entrées
        $request->validate([
            'product_ids' => 'required|array',
            'product_ids.*' => 'exists:products,id',
            'quantities' => 'required|array',
            'quantities.*' => 'integer|min:1',
            'client_id' => 'required|exists:clients,id',
            'type_livreur' => 'required|string',
            'methode_paiement' => 'required|string',
            'id_panier' => 'required|exists:paniers,id',
        ]);

        try {
            $order = Commande::create([
                'date_creation' => now(),
                'status' => 'pending',
                'type_livreur' => $request->input('type_livreur'),
                'methode_paiement' => $request->input('methode_paiement'),
                'id_panier' => $request->input('id_panier'),
            ]);

            $client = Client::findOrFail($request->input('client_id'));
            $order->client()->associate($client);

            foreach ($request->input('product_ids') as $index => $productId) {
                $product = Product::findOrFail($productId);
                $quantity = $request->input('quantities')[$index];
                $order->products()->attach($product, ['quantite' => $quantity]);
            }

            $totalPrice = $this->calculateTotalPrice($order);
            $order->total_price = $totalPrice;
            $order->save();

            return response()->json(['message' => 'Order created successfully', 'order' => $order]);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function showOrder($orderId)
    {
        try {
            $order = Commande::with('client', 'products')->findOrFail($orderId);
            $totalPrice = $this->calculateTotalPrice($order);
            return response()->json(['order' => $order, 'total_price' => $totalPrice]);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Order not found'], 404);
        }
    }

    private function calculateTotalPrice(Commande $order)
    {
        return $order->products->sum(function ($product) {
            return $product->prix * $product->pivot->quantite;
        });
    }
}
