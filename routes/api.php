<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CakeController;
use App\Http\Controllers\CategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UtilisateurController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\PanierController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\CommandeController;
use App\Http\Controllers\Commcontroller;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout',[AuthController::class,'logout']);
Route::Resource('utilisateurs', UtilisateurController::class);
Route::Resource('clients', ClientController::class);
Route::Resource('categories', CategoryController::class);
Route::Resource('products', ProductController::class);



Route::get('/admin/messages', 'MessageController@index');
Route::get('/admin/messages/{id}', 'MessageController@show');
Route::post('/admin/messages/{id}/reply', 'MessageController@reply');




Route::prefix('messages')->group(function () {
    Route::get('/', [MessageController::class, 'index']);
    Route::post('/', [MessageController::class, 'store']);
    Route::get('/{id}', [MessageController::class, 'show']);
    Route::put('/{id}', [MessageController::class, 'update']);
    Route::delete('/{id}', [MessageController::class, 'destroy']);
    Route::put('/{id}/read', [MessageController::class, 'read']);
});


Route::post('/panier/ajouterProduit', [PanierController::class, 'ajouterProduit']);
Route::post('/panier/ajouterlike', [PanierController::class, 'ajouterlike']);
Route::delete('/panier/supprimer-produit/{idPanierProduit}', [PanierController::class, 'supprimerProduit']);



Route::get('/commandes', [CommandeController::class, 'afficherCommandes']);
Route::post('/commandes/creer', [CommandeController::class, 'createOrder']);
Route::get('/commandes/{id}', [CommandeController::class, 'showOrder']);


Route::post('/comm', [Commcontroller::class, 'store']);
Route::get('/index', [CommController::class, 'index']);




Route::get('/cakes', [CakeController::class, 'index']);