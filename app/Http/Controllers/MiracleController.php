<?php

namespace App\Http\Controllers;

use App\Models\Miracle;
use Illuminate\Http\Request;

class MiracleController extends Controller
{

    public function index()
    {
        $miracle =  Miracle::all();
        return response()->json($miracle);


    }
    public function store(Request $request)
    {
        $miracle = new Miracle();
        $miracle->title = $request->title;
        $miracle->content = $request->content;

        // Check if the user is authenticated before accessing $request->user()
        if ($request->user()) {
            $miracle->user_id = $request->user()->id;
        }

        $miracle->save();

        return response()->json([
            'message' => 'Great success! New miracle created',
            'miracle' => $miracle
        ], 201);
    }


}
