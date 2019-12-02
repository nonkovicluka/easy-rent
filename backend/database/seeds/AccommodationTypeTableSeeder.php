<?php

use App\AccommodationType;
use Illuminate\Database\Seeder;

class AccommodationTypeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $hotel = new AccommodationType();
        $hotel->name = 'Hotel';
        $hotel->save();
        
        $hostel = new AccommodationType();
        $hostel->name = 'Hostel';
        $hostel->save();
        
        $apartments = new AccommodationType();
        $apartments->name = 'Apartment';
        $apartments->save();
    }
}
