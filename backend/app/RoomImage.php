<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RoomImage extends Model
{
    protected $fillable = ['image_source', 'room_id', 'name',];

    public $timestamps = false;


    public function room()
    {
        return $this->belongsTo(Room::class);
    }
}
