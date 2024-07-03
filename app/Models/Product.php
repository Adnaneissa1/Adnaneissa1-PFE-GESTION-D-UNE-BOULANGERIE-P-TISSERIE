<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = ['nom', 'description', 'prix', 'image', 'quantite_en_stock', 'categorie_id'];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function panierProduits()
    {
        return $this->hasMany(PanierProduit::class);
    }
}
