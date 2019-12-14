<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // Role comes before User seeder here.
        $this->call(RoleTableSeeder::class);
        // User seeder will use the roles above created.
        $this->call(UserTableSeeder::class);
        // AccommodationType before Accommodation
        $this->call(AccommodationTypeTableSeeder::class);
        // Countries before Places
        $this->call(CountryTableSeeder::class);
        // Places before Accommodation
        $this->call(PlaceTableSeeder::class);
        // Accommodation before AccommodationImages
        $this->call(AccommodationTableSeeder::class);
        // AccommodationImages before Room
        $this->call(AccommodationImageTableSeeder::class);
        // Room before RoomImages
        $this->call(RoomTableSeeder::class);
        //RoomImages before
        $this->call(RoomImageTableSeeder::class);
        
        $this->call(ReservationTableSeeder::class);
        
        $this->call(ReviewTableSeeder::class);
    }
}
