<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AccommodationType extends Model
{

    protected $fillable = ['name'];

    public $timestamps = false;

    public function accomodations()
    {
        return $this->hasMany(Accommodation::class);
    }
}
