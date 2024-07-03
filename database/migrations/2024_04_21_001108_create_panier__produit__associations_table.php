<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('panier_produits', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_produit');
            $table->foreign('id_produit')->references('id')->on('products')->onDelete('cascade');
            $table->unsignedBigInteger('id_panier');
            $table->foreign('id_panier')->references('id')->on('paniers')->onDelete('cascade');
            $table->integer('quantite');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('panier_produits');
    }
};
