<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Accommodation extends Model
{
    protected $fillable = [
        'name', 'description', 'address', 'average_grade', 'latitude', 'longitude', 'approved',
        'user_id', 'accommodation_type_id', 'place_id', 'deleted',
    ];

    public $timestamps = false;


    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function accommodationType()
    {
        return $this->belongsTo(AccommodationType::class);
    }

    public function place()
    {
        return $this->belongsTo(Place::class);
    }

    public function accommodationImages()
    {
        return $this->hasMany(AccommodationImage::class);
    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }

    public function rooms()
    {
        return $this->hasMany(Room::class);
    }
}
