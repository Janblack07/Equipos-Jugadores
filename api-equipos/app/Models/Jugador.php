<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Jugador extends Model
{
    use HasFactory;
    public $timestamps=false;
    protected $table ='jugadors';
    protected $fillable=['nombreJ','apellidoJ','dorsalJ','posicionJ','equipo_id'];


    public function Equipos(){
        return $this->belongsTo(Equipo::class,'equipo_id','id');
    }
}
