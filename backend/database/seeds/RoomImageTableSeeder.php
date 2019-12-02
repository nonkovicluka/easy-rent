<?php

use App\RoomImage;
use Illuminate\Database\Seeder;

class RoomImageTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    
        $img1 = RoomImage::create([
            'name' => '1-1.jpg',
            'room_id' => 1,
            'image_source' => 'images/accommodation/2/room/1/1-1.jpg'
        ]);
    
        $img2 = RoomImage::create([
            'name' => '1-2.jpg',
            'room_id' => 1,
            'image_source' => 'images/accommodation/2/room/1/1-2.jpg'
        ]);
    
        $img3 = RoomImage::create([
            'name' => '2-1.jpg',
            'room_id' => 2,
            'image_source' => 'images/accommodation/2/room/2/2-1.jpg'
        ]);
    
        $img4 = RoomImage::create([
            'name' => '2-2.jpg',
            'room_id' => 2,
            'image_source' => 'images/accommodation/2/room/2/2-2.jpg'
        ]);
    
        $img5 = RoomImage::create([
            'name' => '3-1.jpeg',
            'room_id' => 3,
            'image_source' => 'images/accommodation/2/room/3/3-1.jpeg'
        ]);
    
        $img6 = RoomImage::create([
            'name' => '4-1.jpg',
            'room_id' => 4,
            'image_source' => 'images/accommodation/2/room/4/4-1.jpg'
        ]);
    
        $img7 = RoomImage::create([
            'name' => '4-2.jpg',
            'room_id' => 4,
            'image_source' => 'images/accommodation/2/room/4/4-2.jpg'
        ]);
    
        $img8 = RoomImage::create([
            'name' => '1-1.jpg',
            'room_id' => 5,
            'image_source' => 'images/accommodation/1/room/5/1-1.jpg'
        ]);
    
        $img9 = RoomImage::create([
            'name' => '1-2.jpg',
            'room_id' => 5,
            'image_source' => 'images/accommodation/1/room/5/1-2.jpg'
        ]);
    
        $img10 = RoomImage::create([
            'name' => '2-1.jpg',
            'room_id' => 6,
            'image_source' => 'images/accommodation/1/room/6/2-1.jpg'
        ]);

    }
}
