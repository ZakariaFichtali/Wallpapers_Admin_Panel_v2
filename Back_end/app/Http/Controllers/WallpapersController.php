<?php

namespace App\Http\Controllers;

use App\Models\wallpapers;
use Illuminate\Http\Request;

class WallpapersController extends Controller
{
    //
    public function index(){
        $wall = wallpapers::all();
        return response()->json($wall);
    }
}
