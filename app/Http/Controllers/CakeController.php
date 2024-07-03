<?php

namespace App\Http\Controllers;

use App\Models\Cake;
use Illuminate\Http\Request;

class CakeController extends Controller
{
    public function index() 
    {
        $cakes = Cake::all();
        return response()->json($cakes);
    }
}
