<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash; // Import Hash facade
use App\Models\User;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $email = $request->input('email');
        $password = $request->input('password');

        // Retrieve the user by email
        $user = User::where('email', $email)->first();

        if ($user) {
            // Compare hashed passwords
            if (Hash::check($password, $user->password)) {
                // Passwords match

                // Update user status to true
                $user->etat = true;
                $user->save();

                return response()->json(['success' => true]);
            } else {
                // Passwords don't match
                return response()->json(['success' => false]);
            }
        } else {
            // User not found
            return response()->json(['success' => false]);
        }
    }

    public function logout(Request $request)
    {
        // Retrieve the authenticated user
        $user = $request->user();

        if ($user) {
            // Update user status to false
            $user->etat = false;
            $user->save();
            
            // Perform logout logic (optional)
            // For example, you might clear session data or JWT token here

            return response()->json(['success' => true]);
        } else {
            // User not found or not authenticated
            return response()->json(['success' => false]);
        }
    }
}
