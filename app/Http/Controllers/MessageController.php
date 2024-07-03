<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Message;

class MessageController extends Controller
{
    /**
     * Affiche la liste des messages avec les informations clients associées.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Charger les messages avec les informations clients associées
        $messages = Message::with('client.user')->get();

        return response()->json(['messages' => $messages], 200);
    }

    /**
     * Affiche les détails d'un message spécifique avec les informations client associées.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // Charger le message avec les informations client associées
        $message = Message::with('client.user')->findOrFail($id);

        return response()->json(['message' => $message], 200);
    }

    /**
     * Stocke un nouveau message dans la base de données.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'content' => 'required',
            'type' => 'required',
            'client_id' => 'required|exists:clients,id',
        ]);

        $message = Message::create($validatedData);
        
        // Charger les informations client associées au message créé
        $message->load('client.user');

        return response()->json(['message' => $message], 201);
    }

    /**
     * Met à jour un message existant dans la base de données.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    /**
     * Supprime un message existant de la base de données.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $message = Message::findOrFail($id);
        $message->delete();

        return response()->json(null, 204);
    }
    
    /**
     * Marque un message comme lu.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function read($id)
    {
        $message = Message::findOrFail($id);
        $message->status = 'read';
        $message->save();

        return response()->json(['message' => $message], 200);
    }
}
