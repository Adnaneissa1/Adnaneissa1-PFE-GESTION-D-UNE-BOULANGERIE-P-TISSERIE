<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Example data for products
        $products = [
            [
                'nom' => 'Product 1',
                'description' => 'Description of Product 1',
                'prix' => 10.99,
                'image' => 'https://via.placeholder.com/150', // Placeholder image URL
                'quantite_en_stock' => 100,
                'categorie_id' => 1, // Assuming category ID
            ],
            [
                'nom' => 'Product 2',
                'description' => 'Description of Product 2',
                'prix' => 19.99,
                'image' => 'https://via.placeholder.com/150', // Placeholder image URL
                'quantite_en_stock' => 50,
                'categorie_id' => 2, // Assuming category ID
            ],
            // Add more products as needed
        ];

        // Insert the products into the database
        foreach ($products as $product) {
            DB::table('products')->insert($product);
        }
    }
}
