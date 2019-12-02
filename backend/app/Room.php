<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Room extends Model
{

    protected $fillable = [
        'name', 'bed_count', 'description', 'price_per_night', 'accommodation_id', 'deleted',
    ];

    public $timestamps = false;


    public function accommodation()
    {
        return $this->belongsTo(Accommodation::class);
    }

    public function roomImages()
    {
        return $this->hasMany(RoomImage::class);
    }

    public function reservations()
    {
        return $this->hasMany(Reservation::class);
    }
}
