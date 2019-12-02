<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAccommodationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('accommodations', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('description')->nullable();
            $table->string('address');
            $table->double('latitude');
            $table->double('longitude');
            $table->boolean('approved')->default(false);
            $table->boolean('deleted')->default(false);
            $table->bigInteger('user_id');
            $table->bigInteger('place_id');
            $table->bigInteger('accommodation_type_id');


            $table->index('user_id');
            $table->index('place_id');
            $table->index('accommodation_type_id');

            
        
        
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('accommodations');
    }
}
