<?php

use App\Accommodation;
use Illuminate\Database\Seeder;

class AccommodationTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $accommodation1 = new Accommodation();
        $accommodation1->name = 'LNDN HTL';
        $accommodation1->description = 'The most amazing hotel in London center.';
        $accommodation1->address = '15 Oxford St, Soho, London W1D, UK';
        $accommodation1->latitude = 51.516251;
        $accommodation1->longitude = -0.1310863;
        $accommodation1->user_id = 1;
        $accommodation1->accommodation_type_id = 1;
        $accommodation1->place_id = 1;
        $accommodation1->approved = true;
        $accommodation1->average_score = 7.7;
        $accommodation1->save();

        $accommodation2 = new Accommodation();
        $accommodation2->name = 'Villa Ibiza';
        $accommodation2->description = 'Villa with view. Sea is amazing.';
        $accommodation2->address = 'Av. 8 d\'Agost, 07800 Eivissa, Illes Balears, Spain';
        $accommodation2->latitude = 38.9184589;
        $accommodation2->longitude = 1.4431428;
        $accommodation2->user_id = 1;
        $accommodation2->accommodation_type_id = 3;
        $accommodation2->place_id = 2;
        $accommodation2->approved = true;
        $accommodation2->average_score = 9;
        $accommodation2->save();

        $accommodation3 = new Accommodation();
        $accommodation3->name = 'Tokyo Ho-Stel';
        $accommodation3->description = 'Small rooms with a lot of beds.';
        $accommodation3->address = '1 Chome-17 Jingumae, Shibuya City, Tokyo 150-0001, Japan';
        $accommodation3->latitude = 35.6713582;
        $accommodation3->longitude = 139.7041715;
        $accommodation3->user_id = 1;
        $accommodation3->accommodation_type_id = 2;
        $accommodation3->place_id = 3;
        $accommodation3->approved = true;
        $accommodation3->save();

        $accommodation4 = new Accommodation();
        $accommodation4->name = 'Miami View Hotel';
        $accommodation4->description = 'Luxurious place';
        $accommodation4->address = 'Ocean Dr, Miami Beach, FL 33139, USA';
        $accommodation4->latitude = 25.7779458;
        $accommodation4->longitude = -80.1311819;
        $accommodation4->user_id = 1;
        $accommodation4->accommodation_type_id = 1;
        $accommodation4->place_id = 4;
        $accommodation4->approved = true;
        $accommodation4->save();

        $accommodation5 = new Accommodation();
        $accommodation5->name = 'Corinthia London Finest';
        $accommodation5->description = 'Great rooms in old hotel';
        $accommodation5->address = 'Abbey Rd, London, UK';
        $accommodation5->latitude = 51.5370923;
        $accommodation5->longitude = -0.1833775;
        $accommodation5->user_id = 1;
        $accommodation5->accommodation_type_id = 1;
        $accommodation5->place_id = 5;
        $accommodation5->approved = true;
        $accommodation5->save();

        $accommodation6 = new Accommodation();
        $accommodation6->name = 'Belgrade cosy apartment';
        $accommodation6->description = 'Very cosy apartment in center of Belgrade.';
        $accommodation6->address = 'Trg Slavija, Trg Slavija, Beograd, Serbia';
        $accommodation6->latitude = 44.8027561;
        $accommodation6->longitude = 20.4658931;
        $accommodation6->user_id = 1;
        $accommodation6->accommodation_type_id = 1;
        $accommodation6->place_id = 6;
        $accommodation6->approved = true;
        $accommodation6->save();

        $accommodation7 = new Accommodation();
        $accommodation7->name = 'Cape Town Lux Apartment';
        $accommodation7->description = 'Apartment with view and pool';
        $accommodation7->address = 'Cape Town, South Africa';
        $accommodation7->latitude = -33.9248685;
        $accommodation7->longitude = 18.4240553;
        $accommodation7->user_id = 1;
        $accommodation7->accommodation_type_id = 3;
        $accommodation7->place_id = 7;
        $accommodation7->approved = true;
        $accommodation7->save();

        $accommodation8 = new Accommodation();
        $accommodation8->name = 'Amsterdam Hostel';
        $accommodation8->description = 'Modern hostel in Amsterdam city centre.';
        $accommodation8->address = 'Leidseplein, 1017 PT Amsterdam, Netherlands';
        $accommodation8->latitude = 52.3637626;
        $accommodation8->longitude = 4.8822281;
        $accommodation8->user_id = 1;
        $accommodation8->accommodation_type_id = 2;
        $accommodation8->place_id = 8;
        $accommodation8->approved = true;
        $accommodation8->save();

        $accommodation9 = new Accommodation();
        $accommodation9->name = 'Vila Novi Sad';
        $accommodation9->description = 'Nice apartment in Novi Sad';
        $accommodation9->address = 'Čerevićka, Novi Sad 406955, Serbia';
        $accommodation9->latitude = 45.2334655;
        $accommodation9->longitude = 19.8037706;
        $accommodation9->user_id = 2;
        $accommodation9->accommodation_type_id = 3;
        $accommodation9->place_id = 9;
        $accommodation9->approved = true;
        $accommodation9->save();


    }
}
