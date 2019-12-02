<?php

use App\Place;
use Illuminate\Database\Seeder;

class PlaceTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        $place1 = new Place();
        $place1->name = 'London';
        $place1->country_id = 1;
        $place1->save();
        
        $place1 = new Place();
        $place1->name = 'Ibiza';
        $place1->country_id = 2;
        $place1->save();
        
        $place1 = new Place();
        $place1->name = 'Tokyo';
        $place1->country_id = 3;
        $place1->save();
        
        $place1 = new Place();
        $place1->name = 'Miami';
        $place1->country_id = 4;
        $place1->save();
        
        $place1 = new Place();
        $place1->name = 'London';
        $place1->country_id = 1;
        $place1->save();
        
        $place1 = new Place();
        $place1->name = 'Belgrade';
        $place1->country_id = 5;
        $place1->save();
        
        $place1 = new Place();
        $place1->name = 'Cape Town';
        $place1->country_id = 6;
        $place1->save();
        
        $place1 = new Place();
        $place1->name = 'Amsterdam';
        $place1->country_id = 7;
        $place1->save();
        
        $place1 = new Place();
        $place1->name = 'Novi Sad';
        $place1->country_id = 5;
        $place1->save();


    }
}
