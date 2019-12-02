<?php

namespace App\Http\Controllers;

use App\AccommodationImage;
use App\RoomImage;
use File;
use Illuminate\Http\Request;

class AccommodationImageController extends Controller
{

    public function saveImages($images, $accommodationId)
    {

        foreach ($images as $image) {

            $filename = $image->getClientOriginalName();
            $filename = time() . '_' . $filename;

            $uploadPath = 'images/accommodation/' . $accommodationId . '/';

            $image->move($uploadPath, $filename);

            AccommodationImage::create([
                'image_source' => $uploadPath . $filename,
                'accommodation_id' => $accommodationId,
                'name' => $image->getClientOriginalName()

            ]);
        }
    }


    public function deleteImage(Request $request)
    {

        $image = $request['image'];
        $image = json_decode($image);
        $type = $request['type'];

        File::delete($image->image_source);


        if ($type === 'accommodation') {

            AccommodationImage::where('id', $image->id)->delete();
            
        } else {

            RoomImage::where('id', $image->id)->delete();
        }
    }
}
