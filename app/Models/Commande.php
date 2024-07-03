<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Commande extends Model
{
    use HasFactory;
    protected $fillable = ['date_creation', 'status', 'type_livreur', 'methode_paiement', 'id_panier'];

    public function panier()
    {
        return $this->belongsTo(Panier::class, 'id_panier');
    }
}
