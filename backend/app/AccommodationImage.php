<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AccommodationImage extends Model
{
    protected $fillable = ['image_source', 'accommodation_id', 'name'];

    public $timestamps = false;

    public function accommodation()
    {
        return $this->belongsTo(Accommodation::class);
    }
}
