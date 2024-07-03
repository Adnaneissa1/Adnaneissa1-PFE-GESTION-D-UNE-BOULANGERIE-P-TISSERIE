<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class comm extends Model
{
    use HasFactory;
    protected $fillable = ['date_creation','status', 'prixproduit', 'produit', 'total'];
}