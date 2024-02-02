<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('csalad', function (Blueprint $table) {
            $table->id();
            $table->string('Nev');
            $table->integer('profil_id');
            $table->date('Letrehozas');
            $table->integer('lista_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('csalad');
    }
};
