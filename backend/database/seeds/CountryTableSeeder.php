<?php

use App\Country;
use Illuminate\Database\Seeder;

class CountryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $country1 = new Country();
        $country1->name = 'United Kingdom';
        $country1->code = 'GB';
        $country1->save();

        $country2 = new Country();
        $country2->name = 'Spain';
        $country2->code = 'ES';
        $country2->save();

        $country3 = new Country();
        $country3->name = 'Japan';
        $country3->code = 'JP';
        $country3->save();

        $country4 = new Country();
        $country4->name = 'United States';
        $country4->code = 'US';
        $country4->save();

        $country5 = new Country();
        $country5->name = 'Serbia';
        $country5->code = 'RS';
        $country5->save();

        $country6 = new Country();
        $country6->name = 'South Africa';
        $country6->code = 'ZA';
        $country6->save();

        $country7 = new Country();
        $country7->name = 'Netherlands';
        $country7->code = 'NL';
        $country7->save();
    }
}
