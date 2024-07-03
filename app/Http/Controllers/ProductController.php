<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Category;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $products = Product::with('category:nom')->get();
        return response()->json($products);
        // return response()->json(['products'=>$products],200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        // Validation des données
        $validator = Validator::make($request->all(), [
            'nom' => 'required|string',
            'description' => 'required|string',
            'prix' => 'required|numeric',
            'quantite_en_stock' => 'required|integer',
            'categorie_nom' => 'required|string',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // Vérification de l'image
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        // Recherche de la catégorie
        $category = Category::where('nom', $request->input('categorie_nom'))->first();

        if (!$category) {
            return response()->json(['message' => 'Category not found.'], 404);
        }

        // Stockage de l'image
        $imagePath = $request->file('image')->store('profile', 'public');

        // Création du produit avec le chemin de l'image
        $product = Product::create([
            'nom' => $request->input('nom'),
            'description' => $request->input('description'),
            'prix' => $request->input('prix'),
            'quantite_en_stock' => $request->input('quantite_en_stock'),
            'categorie_id' => $category->id,
            'image' => $imagePath,
        ]);

        return response()->json($product, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Product $product)
    {
        return response()->json($product);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, Product $product)
    {
        // $product=Product::find($product);
        $validator = Validator::make($request->all(), [
            'nom' => 'string',
            'description' => 'string',
            'prix' => 'numeric',
            'quantite_en_stock' => 'integer',
            'categorie_nom' => 'string',
            // 'image' => 'image|mimes:jpeg,png,jpg,gif|max:2048', // Adjust max size as needed
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        if ($request->has('categorie_nom')) {
            $category = Category::where('nom', $request->input('categorie_nom'))->first();

            if (!$category) {
                return response()->json(['message' => 'Category not found.'], 404);
            }

            $product->categorie_id = $category->id;
        }

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('public/images');
            $product->image = str_replace('public/', 'storage/', $imagePath);
        }

        $product->fill($request->all());
        $product->save();

        return response()->json($product, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Product $product)
    {
        $product->delete();

        return response()->json(null, 204);
    }
}