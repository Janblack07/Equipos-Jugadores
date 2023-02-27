<?php

namespace App\Http\Controllers;

use App\Models\Equipo;
use App\Models\Jugador;
use Illuminate\Http\Request;

class JugadorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $jugadores = Jugador::with('Equipos')->get();
        return response()->json(['Jugadores'=> $jugadores]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $equipos = Equipo::find($request->equipo_id);
        $equipos->Jugadores()->create([
            'nombreJ'=>$request->nombreJ,
            'apellidoJ'=>$request->apellidoJ,
            'dorsalJ'=>$request->dorsalJ,
            'posicionJ'=>$request->posicionJ,
            'equipo_id'=>$equipos->id,
        ]);
        return response()->json(['Messages'=> 'Se creo el jugador.']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Jugador  $jugador
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $jugador = Jugador::find($id);
        $jugador->Equipos->NombreE;
        return response()->json(['Jugadores'=> $jugador]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Jugador  $jugador
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        Jugador::where('id',$id)->update([
            'nombreJ'=>$request->nombreJ,
            'apellidoJ'=>$request->apellidoJ,
            'dorsalJ'=>$request->dorsalJ,
            'posicionJ'=>$request->posicionJ,
            'equipo_id'=>$request->equipo_id
        ]);
        return response()->json(['Messages'=> 'Se Actualizo el jugador.']);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Jugador  $jugador
     * @return \Illuminate\Http\Response
     */
    public function destroy( $id)
    {
        //
        $jugadores = Jugador::find($id)->delete();
        return response()->json(['Messages'=> 'Se Elimino el jugador.']);
    }
}
