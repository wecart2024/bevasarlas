<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class csaladadat extends Model
{
    protected $table='csalad';
    protected $primarykey='id';
    protected $fillable=['Nev','profil_id','Letrehozas','lista_id'];
}
