<?php

use App\AccommodationImage;
use Illuminate\Database\Seeder;

class AccommodationImageTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $img1 = new AccommodationImage();
        $img1->image_source = 'images/accommodation/1/1571150962_waldorf-hilton-the-waldorf-hilton-4b985e4ecd76e7498ac3f4d6e063bdec.jpg';
        $img1->accommodation_id = 1;
        $img1->name = 'waldorf-hilton-the-waldorf-hilton-4b985e4ecd76e7498ac3f4d6e063bdec.jpg';
        $img1->save();

        $img2 = new AccommodationImage();
        $img2->image_source = 'images/accommodation/2/1571211816_ibiza-villa-white-angel-164223568859fb331b8d4785.91229835.1920.jpg';
        $img2->accommodation_id = 2;
        $img2->name = 'ibiza-villa-white-angel-164223568859fb331b8d4785.91229835.1920.jpg';
        $img2->save();


        $img5 = new AccommodationImage();
        $img5->image_source = 'images/accommodation/3/1571211908_toky1.jpg';
        $img5->accommodation_id = 3;
        $img5->name = 'toky1.jpg';
        $img5->save();


        $img6 = new AccommodationImage();
        $img6->image_source = 'images/accommodation/4/1571212083_miami1.jpg';
        $img6->accommodation_id = 4;
        $img6->name = 'miami1.jpg';
        $img6->save();


        $img8 = new AccommodationImage();
        $img8->image_source = 'images/accommodation/5/1571212184_front-entrance-night.jpg';
        $img8->accommodation_id = 5;
        $img8->name = 'front-entrance-night.jpg';
        $img8->save();

        $img9 = new AccommodationImage();
        $img9->image_source = 'images/accommodation/5/1571212184_Corinthia-Hotel-London-luxury-hotel-Front_Exterior-homepage.jpg';
        $img9->accommodation_id = 5;
        $img9->name = 'Corinthia-Hotel-London-luxury-hotel-Front_Exterior-homepage.jpg';
        $img9->save();

        $img10 = new AccommodationImage();
        $img10->image_source = 'images/accommodation/6/1571212474_apartmani-beograd-1-jpg-1457183522.jpg';
        $img10->accommodation_id = 6;
        $img10->name = 'apartmani-beograd-1-jpg-1457183522.jpg';
        $img10->save();

        $img11 = new AccommodationImage();
        $img11->image_source = 'images/accommodation/7/1571212589_7668d738_original.jpg';
        $img11->accommodation_id = 7;
        $img11->name = '7668d738_original.jpg';
        $img11->save();

        $img12 = new AccommodationImage();
        $img12->image_source = 'images/accommodation/7/1571212589_Top-10-Luxury-Apartments-in-Cape-Town-for-the-Perfect-Staycation-Artea.jpg';
        $img12->accommodation_id = 7;
        $img12->name = 'Top-10-Luxury-Apartments-in-Cape-Town-for-the-Perfect-Staycation-Artea.jpg';
        $img12->save();

        $img13 = new AccommodationImage();
        $img13->image_source = 'images/accommodation/8/1571212650_ams.jpg';
        $img13->accommodation_id = 8;
        $img13->name = '1571212650_ams.jpg';
        $img13->save();

        $img14 = new AccommodationImage();
        $img14->image_source = 'images/accommodation/9/1571221807_147564456.jpg';
        $img14->accommodation_id = 9;
        $img14->name = '147564456.jpg';
        $img14->save();

        $img15 = new AccommodationImage();
        $img15->image_source = 'images/accommodation/9/1571221807_Minsk-apartment-by-I-project-living-room-sectional-and-coffee-tables.jpg';
        $img15->accommodation_id = 9;
        $img15->name = 'Minsk-apartment-by-I-project-living-room-sectional-and-coffee-tables.jpg';
        $img15->save();
    }
}
