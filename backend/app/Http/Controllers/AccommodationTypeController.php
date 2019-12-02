<?php

namespace App\Http\Controllers;

use App\AccommodationType;
use Illuminate\Http\Request;

class AccommodationTypeController extends Controller
{

    public function getAll()
    {
        return AccommodationType::all();
    }


}
