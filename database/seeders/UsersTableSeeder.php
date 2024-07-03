<?php

namespace Database\Seeders; // Correct namespace

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 1; $i <= 10; $i++) {
            DB::table('utilisateurs')->insert([
                'nom' => 'User' . $i,
                'prenom' => 'Surname' . $i,
                'email' => 'user' . $i . '@example.com',
                'password' => Hash::make('password'),
                'type' => 'user',
                'etat' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

    }
}
