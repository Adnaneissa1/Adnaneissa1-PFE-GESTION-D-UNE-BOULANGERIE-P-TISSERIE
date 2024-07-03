<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\comm;

class commcontroller extends Controller
{
    public function index()
    {
        $commande = comm::all();
        return response()->json($commande,200);
        // return response()->json(['products'=>$products],200);
    }
    //
    public function store(Request $request)
    {
        // Validation des données
        $validator = validator::make($request->all(), [
            'date_creation' => 'required',
            'status' => '',
            'prixproduit' => 'required',
            'produit' => 'required',
            'total' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        $comm = comm::create($request->all());


        return response()->json($comm, 201);
    }
}