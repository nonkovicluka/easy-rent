<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    protected $fillable = ['name', 'code'];

    public $timestamps = false;

    public function places()
    {
        return $this->hasMany(Place::class);
    }
}
