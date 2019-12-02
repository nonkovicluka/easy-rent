<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Place extends Model
{
    protected $fillable = ['name', 'country_id'];

    public $timestamps = false;


    public function accomodations()
    {
        return $this->hasMany(Accommodation::class);
    }

    public function country()
    {
        return $this->belongsTo(Country::class);
    }
}
