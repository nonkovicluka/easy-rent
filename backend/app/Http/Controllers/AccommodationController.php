<?php

namespace App\Http\Controllers;

use App\Accommodation;
use App\Country;
use App\Events\AccommodationApprovalNotification;
use App\Events\AccommodationRegisterNotification;
use App\Place;
use App\Reservation;
use App\Review;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;

class AccommodationController extends Controller
{

    public function register(Request $request)
    {

        $countryProp = json_decode($request['country']);

        if ($request['placeName'] && $countryProp) {

            if (Country::where('name', $countryProp->name)->exists()) {

                $country = Country::where('name', $countryProp->name)->first();
            } else {
                $country = Country::create([
                    'name' => $countryProp->name,
                    'code' => $countryProp->code
                ]);
            }


            if (Place::where('name', $request['placeName'])->exists()) {

                $place = Place::where('name',  $request['placeName'])->first();
            } else {
                $place = Place::create([
                    'name' => $request['placeName'],
                    'country_id' => $country->id
                ]);
            }
        }

        $accommodation = Accommodation::create([
            'name' => $request['name'],
            'address' => $request['address'],
            'description' => $request['description'],
            'latitude' => $request['latitude'],
            'longitude' => $request['longitude'],
            'accommodation_type_id' => $request['accommodationType'],
            'user_id' => $request['userId'],
            'place_id' => $place->id,

        ]);

        $images = $request['images'];


        if ($images !== null) {

            app('App\Http\Controllers\AccommodationImageController')->saveImages($images, $accommodation->id);
        }


        $user = User::find($request['userId']);
        event(new AccommodationRegisterNotification($user->name, ' has registered accommodation.'));

        return $accommodation;
    }


    public function search(Request $request)
    {


        $accommodation = null;

        $term = $request['term'];
        $type = $request['type'];
        $unchecked = $request['unchecked'];

        $ownerId = $request['ownerId'];


        if ($type && !$ownerId) {

            $accommodation = Accommodation::with('accommodationImages', 'accommodationType', 'user')
                ->where('deleted', false)
                ->where('approved', true)
                ->where('accommodation_type_id',  $type)
                ->paginate(6);
        }

        if ($type && $ownerId) {

            $accommodation = Accommodation::with('accommodationImages', 'accommodationType', 'user')
                ->where('deleted', false)
                ->where('approved', true)
                ->where('accommodation_type_id',  $type)
                ->where('user_id', $ownerId)
                ->get();
        }


        if ($term && $ownerId) {
            $accommodation = Accommodation::with('accommodationImages', 'accommodationType', 'user')
                ->where('deleted', false)
                ->where('approved', true)
                ->where('user_id', '=', $ownerId)
                ->where(function ($query) use ($term) {
                    $query->where('name', 'like', '%' . $term . '%')
                        ->orWhere('address', 'like', '%' . $term . '%')
                        ->orWhere('description', 'like', '%' . $term . '%');
                })
                ->get();
        }

        if ($term && !$ownerId) {
            $accommodation = Accommodation::with('accommodationImages', 'accommodationType', 'user')
                ->where('deleted', false)
                ->where('approved', true)
                ->where(function ($query) use ($term) {
                    $query->where('name', 'like', '%' . $term . '%')
                        ->orWhere('address', 'like', '%' . $term . '%')
                        ->orWhere('description', 'like', '%' . $term . '%');
                })
                ->paginate(6);
        }


        if (!$term && !$type && !$ownerId && !$unchecked) {
            $accommodation = Accommodation::with('accommodationImages', 'accommodationType', 'user')
                ->where('deleted', false)
                ->where('approved', true)
                ->paginate(6);
        }

        if (!$term && !$type && $ownerId &&  !$unchecked) {
            $accommodation = Accommodation::with('accommodationImages', 'accommodationType', 'user')
                ->where('deleted', false)
                ->where('approved', true)
                ->Where('user_id', $ownerId)
                ->get();
        }

        if ($unchecked) {

            $accommodation = Accommodation::with('accommodationType', 'user')
                ->where('approved', false)
                ->get();
        }

        return $accommodation;
    }

    public function approveAccommodation(Request $request)
    {

        $id = $request->route('id');

        $accommodation =  Accommodation::find($id);

        $accommodation->approved = true;

        $accommodation->save();

        event(new AccommodationApprovalNotification($accommodation->user_id, 'Admin has approved accommodation.'));
    }

    public function editAccommodation(Request $request)
    {

        $newAccommodation = $request->all();
        $accommodation =  Accommodation::find($newAccommodation['id']);

        $accommodation->fill($newAccommodation);
        $accommodation->save();

        $images = $request['images'];

        if ($images !== null) {

            app('App\Http\Controllers\AccommodationImageController')->saveImages($images, $accommodation->id);
        }


        return $accommodation;
    }


    public function quickEdit(Request $request)
    {

        $newAccommodation = $request->all();
        $accommodation =  Accommodation::find($newAccommodation['id']);

        $accommodation->fill($newAccommodation);
        $accommodation->save();


        return $accommodation;
    }

    public function delete(Request $request)
    {

        $id = $request->route('id');

        $accommodation =  Accommodation::find($id);

        $accommodation->deleted = true;

        $accommodation->save();
    }

    public function getOne(Request $request)
    {

        $id = $request['id'];

        $accommodation = Accommodation::with('accommodationImages')->find($id);

        return $accommodation;
    }


    public function rateAccommodation(Request $request)
    {
        $userId = $request['userId'];

        $user = User::with('reservations')
            ->find($userId);

        $accommodationId = $request['accommodationId'];


        if ($user->reservations->count() > 0) {

            $reservations = Reservation::whereHas('room', function ($query) use ($accommodationId) {

                $query->where('accommodation_id', $accommodationId);
            })
                ->where('user_id', $userId)
                ->whereDate('end_date', '<=', Carbon::now()->toDateString())
                ->get();

            if ($reservations->count() > 0) {

                $review = Review::create([
                    'grade' =>  (int) $request['grade'],
                    'comment' => $request['comment'],
                    'user_id' =>  $userId,
                    'accommodation_id' => $accommodationId,

                ]);

                $avg_score = Review::where('accommodation_id', $accommodationId)
                    ->avg('grade');

                $accommodation = Accommodation::find($accommodationId);

                $accommodation->average_score = $avg_score;

                $accommodation->save();

                return $review;
            }
        }





        return response()->json(['error' => 'You don\'t have reservation that ended in this accommodation.'], 401);
    }
}
