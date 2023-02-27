<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Equipo extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = 'equipos';
    protected $fillable = ['NombreE','NombreDT'];


    public function Jugadores(){
       return $this->HasMany(Jugador::class,'equipo_id','id');
    }
}
