<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Client;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http; // Add Http facade for API calls
use Illuminate\Support\Facades\Log; // Add Log facade for error reporting

class ClientController extends Controller
{
    /**
     * Display a listing of the resource via API.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $clients = Client::with('user')->get();
    
            return response()->json($clients, 200);
        } catch (\Exception $e) {
            Log::error('Error fetching clients: ' . $e->getMessage());
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
    

    /**
     * Store a newly created resource in storage via API.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'address' => 'required|string|max:255',
            'phone_number' => 'required|string|max:255|unique:clients,phone_number',
            'nom' => 'required|string|max:255',
            'prenom' => 'required|string|max:255',
            'email' => 'required|string|email|unique:utilisateurs,email',
            'password' => 'required|string|min:8',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        try {
            // Create a new user for the client
            $user = User::create([
                'nom' => $request->nom,
                'prenom' => $request->prenom,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'type' => 'client', // Set user type to client
            ]);

            // Create the client record associated with the created user
            $client = Client::create([
                'address' => $request->address,
                'phone_number' => $request->phone_number,
                'id_utilisateur' => $user->id,
            ]);

            return response()->json($client, 201); // Return created client in JSON format
        } catch (\Exception $e) {
            Log::error('Error creating client: ' . $e->getMessage());
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource via API.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $client = Client::with('user')->findOrFail($id); // Eager load user information

            return response()->json($client, 200); // Return client in JSON format
        } catch (\Exception $e) {
            Log::error('Error fetching client: ' . $e->getMessage());
            return response()->json(['error' => $e->getMessage()], 404);
        }
    }

    /**
     * Update the specified resource in storage via API.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'address' => 'string|max:255',
            'phone_number' => 'string|max:255|unique:clients,phone_number,' . $id, // Allow the current client's phone number
            'nom' => 'string|max:255',
            'prenom' => 'string|max:255',
            'email' => 'string|email|unique:utilisateurs,email,' . $id, // Allow the current client's email
            'password' => 'string|min:8',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        try {
            // Find the client by ID
            $client = Client::findOrFail($id);

            // Update user information if provided
            if ($request->has('nom')) {
                $client->user->nom = $request->nom;
            }
            if ($request->has('prenom')) {
                $client->user->prenom = $request->prenom;
            }
            if ($request->has('email')) {
                $client->user->email = $request->email;
            }
            if ($request->has('password')) {
                $client->user->password = Hash::make($request->password);
            }

            // Update client information if provided
            if ($request->has('address')) {
                $client->address = $request->address;
            }
            if ($request->has('phone_number')) {
                $client->phone_number = $request->phone_number;
            }

            // Save changes
            $client->user->save();
            $client->save();

            return response()->json($client, 200); // Return updated client in JSON format
        } catch (\Exception $e) {
            Log::error('Error updating client: ' . $e->getMessage());
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
