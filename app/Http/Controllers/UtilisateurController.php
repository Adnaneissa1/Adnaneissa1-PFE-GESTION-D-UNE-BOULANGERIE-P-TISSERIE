<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Http\Response;

class UtilisateurController extends Controller
{
    /**
     * Afficher la liste des utilisateurs.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::all();
        return response()->json(['users' => $users]);
    }

    /**
     * Enregistrer un nouvel utilisateur.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'nom' => 'required|string|max:255',
            'prenom' => 'required|string|max:255',
            'email' => 'required|string|email|unique:utilisateurs,email',
            'password' => 'required|string|min:8',
            'type' => 'required|string',
        ]);

        $user = User::create($validatedData);
        return response()->json(['user' => $user], Response::HTTP_CREATED);
    }

    /**
     * Afficher l'utilisateur spécifié.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::findOrFail($id);
        return response()->json(['user' => $user]);
    }

    /**
     * Mettre à jour l'utilisateur spécifié.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'nom' => 'string|max:255',
            'prenom' => 'string|max:255',
            'email' => 'string|email|unique:utilisateurs,email,'.$id,
            'password' => 'string|min:8',
            'type' => 'string', 
            'etat' => 'boolean', 
        ]);

        $user = User::findOrFail($id);
        $user->update($validatedData);
        return response()->json(['user' => $user], Response::HTTP_OK);
    }

    /**
     * Supprimer l'utilisateur spécifié.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $user->delete();
        return response()->json(null, 204);
    }
}
