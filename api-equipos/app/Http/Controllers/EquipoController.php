<?php

namespace App\Http\Controllers;

use App\Models\Equipo;
use Illuminate\Http\Request;

class EquipoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $equipos = Equipo::all();
        return response()->json(['Equipos'=>$equipos]);
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
        $equipos = Equipo::create([
            'NombreE'=>$request->NombreE,
            'NombreDT'=>$request->NombreDT
        ]);
        return response()->json(['messages'=>'Se creo un Equipo']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Equipo  $equipo
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $equipos = Equipo::find($id);
        return response()->json(['Equipos'=>$equipos]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Equipo  $equipo
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {
        //
        $equipos = Equipo::find($id);
        $equipos->update([
            'NombreE'=>$request->NombreE,
            'NombreDT'=>$request->NombreDT
        ]);
        return response()->json(['messages'=>'Se Actualizo un Equipo']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Equipo  $equipo
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $equipos = Equipo::find($id)->delete();
        return response()->json(['messages'=>'Se Elimino un Equipo']);
    }
}
