<?php

use App\Room;
use Illuminate\Database\Seeder;

class RoomTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $room1 = Room::create([
            'name' => 'De la Grazia',
            'bed_count' => 4,
            'description' => 'This room is very big...',
            'price_per_night' => 55.99,
            'accommodation_id' => 2
        ]);

        $room2 = Room::create([
            'name' => 'Pure exellence',
            'bed_count' => 3,
            'description' => 'Room with best view in Ibiza...',
            'price_per_night' => 75,
            'accommodation_id' => 2
        ]);

        $room3 = Room::create([
            'name' => 'San Pala Marco',
            'bed_count' => 6,
            'description' => 'This room is biggest in building, also has jacuzzi...',
            'price_per_night' => 125.99,
            'accommodation_id' => 2
        ]);

        $room4 = Room::create([
            'name' => 'Buena Vista',
            'bed_count' => 2,
            'description' => 'Room with big balcony and great view...',
            'price_per_night' => 40,
            'accommodation_id' => 2
        ]);
        
        $room5 = Room::create([
            'name' => 'Room 225',
            'bed_count' => 6,
            'description' => 'This room has big bathroom and king size bed',
            'price_per_night' => 325.50,
            'accommodation_id' => 1
        ]);

        $room6 = Room::create([
            'name' => 'Room 333',
            'bed_count' => 2,
            'description' => 'Great view from balcony',
            'price_per_night' => 100,
            'accommodation_id' => 1
        ]);





    }
}
