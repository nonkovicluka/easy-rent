<?php

namespace App\Http\Controllers;

use App\Reservation;
use DateTime;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Date;

class ReservationController extends Controller
{


    public function roomReservation(Request $request)
    {

        $startDate = new DateTime($request['startDate']);

        $endDate = new DateTime($request['endDate']);

        $totalPrice = $request['totalPrice'];

        $reservation = Reservation::create([

            'start_date' => $startDate,
            'end_date' => $endDate,
            'total_price' => $totalPrice,
            'room_id' => $request['roomId'],
            'user_id' => $request['userId'],

        ]);

        return $reservation;
    }
}
