<?php

namespace App\Http\Controllers;

use App\AccommodationImage;
use App\RoomImage;
use Illuminate\Http\Request;

class RoomImageController extends Controller
{
    

    public function saveImages($images, $accommodationId, $roomId)
    {

        foreach ($images as $image) {

            $filename = $image->getClientOriginalName();
            $filename = time() . '_' . $filename;

            $uploadPath = 'images/accommodation/' . $accommodationId . '/room/'. $roomId . '/';

            $image->move($uploadPath, $filename);

            $roomImage = RoomImage::create([
                'image_source' => $uploadPath . $filename,
                'room_id' => $roomId,
                'name' => $image->getClientOriginalName()

            ]);
        }
    }


}
