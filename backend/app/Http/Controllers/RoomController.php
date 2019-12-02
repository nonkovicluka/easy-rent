<?php

namespace App\Http\Controllers;

use App\Room;
use Illuminate\Http\Request;

class RoomController extends Controller
{



    public function register(Request $request)
    {

        $room = Room::create([
            'name' => $request['name'],
            'bed_count' => $request['bed_count'],
            'description' => $request['description'],
            'price_per_night' => $request['price_per_night'],
            'accommodation_id' => $request['accommodation_id']
        ]);

        $images = $request['images'];

        if ($images !== null) {

            app('App\Http\Controllers\RoomImageController')->saveImages($images, $room->accommodation_id, $room->id);
        }
        return $room;
    }


    public function getRooms(Request $request)
    {

        $id = $request['id'];
        $myRooms = $request['myRooms'];

        if ($myRooms === 'false') {

            $room = Room::with('roomImages', 'accommodation.accommodationType')
                ->where('deleted', false)
                ->where('accommodation_id', $id)
                ->paginate(6);
        } else {
            $room = Room::with('roomImages', 'accommodation.accommodationType')
                ->where('deleted', false)
                ->where('accommodation_id', $id)
                ->get();
        }

        return $room;
    }

    public function getOne(Request $request)
    {

        $id = $request['id'];

        $room = Room::with('roomImages')
            ->where('id', $id)
            ->where('deleted', false)
            ->first();

        return $room;
    }


    public function delete(Request $request)
    {

        $id = $request->route('id');

        $room =  Room::find($id);

        $room->deleted = true;

        $room->save();
    }

    public function editRoom(Request $request)
    {

        $newRoom = $request->all();
        $room =  Room::find($newRoom['id']);

        $room->fill($newRoom);
        $room->save();

        $images = $request['images'];

        if ($images !== null) {

            app('App\Http\Controllers\RoomImageController')->saveImages($images, $room->accommodation_id, $room->id);
        }


        return $room;
    }
}
