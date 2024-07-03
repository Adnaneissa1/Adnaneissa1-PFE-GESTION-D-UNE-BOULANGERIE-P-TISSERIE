<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PanierProduit extends Model
{
    use HasFactory;
    protected $fillable = ['id_produit', 'id_panier','quantite'];

    public function panier()
    {
        return $this->belongsTo(Panier::class, 'id_panier');
    }

    public function product()
    {
        return $this->belongsTo(Product::class, 'id_produit');
    }

}
