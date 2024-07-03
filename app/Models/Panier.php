<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Panier extends Model
{
    use HasFactory;

    protected $fillable = ['date_creation','id_client'];
    
    public function client()
    {
        return $this->belongsTo(Client::class, 'id_client');
    }
    public function panierProduits()
    {
        return $this->hasMany(PanierProduit::class);
    }
}
