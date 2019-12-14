<?php

use App\Reservation;
use Illuminate\Database\Seeder;

class ReservationTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $reservation1 = new Reservation();
        $reservation1->total_price = 150;
        $reservation1->start_date = '2019-11-14';
        $reservation1->end_date = '2019-11-16';
        $reservation1->user_id = 1;
        $reservation1->room_id = 2;
        $reservation1->save();

        $reservation2 = new Reservation();
        $reservation2->total_price = 2071.5;
        $reservation2->start_date = '2019-12-14';
        $reservation2->end_date = '2020-01-20';
        $reservation2->user_id = 1;
        $reservation2->room_id = 1;
        $reservation2->save();

        $reservation3 = new Reservation();
        $reservation3->total_price = 13020;
        $reservation3->start_date = '2019-12-19';
        $reservation3->end_date = '2020-01-28';
        $reservation3->user_id = 1;
        $reservation3->room_id = 5;
        $reservation3->save();
    }
}
