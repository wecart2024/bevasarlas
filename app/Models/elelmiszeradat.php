<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class elelmiszeradat extends Model
{
    protected $table='elelmiszer';
    protected $primarykey='id';
    protected $fillable=['kev','kep','allapot_id'];
}
