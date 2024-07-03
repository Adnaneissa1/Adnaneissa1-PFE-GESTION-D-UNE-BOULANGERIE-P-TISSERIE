<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;
    protected $fillable = [
        'address', 'phone_number', 'id_utilisateur',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'id_utilisateur');
    }
    public function messages()
    {
        return $this->hasMany(Message::class);
    }
}
