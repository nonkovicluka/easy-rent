<?php

use App\Review;
use Illuminate\Database\Seeder;

class ReviewTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $review1 = new Review();
        $review1->grade = 9;
        $review1->comment = 'Nice villa';
        $review1->user_id = 1;
        $review1->accommodation_id = 2;
        $review1->save();

        $review2 = new Review();
        $review2->grade = 10;
        $review2->comment = 'Best place in Ibiza...';
        $review2->user_id = 3;
        $review2->accommodation_id = 2;
        $review2->save();

        $review3 = new Review();
        $review3->grade = 8;
        $review3->comment = 'Amazing sunsets';
        $review3->user_id = 2;
        $review3->accommodation_id = 2;
        $review3->save();
    }
}
