<?php

use App\Events\AccommodationNotification;

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function () {

    Route::post('login', 'AuthController@login');
    Route::post('register', 'AuthController@register');
    Route::post('refresh', 'AuthController@refresh');
    Route::get('getUsers', 'AuthController@getUsers');
});

Route::group([

    'middleware' => 'api',
    'prefix' => 'user'

], function () {

    Route::get('getUsers', 'UserController@getUsers');
    Route::put('ban/{id}', 'UserController@banUser');
});

Route::group([

    'middleware' => 'api',
    'prefix' => 'accommodation'

], function () {

    Route::post('register', 'AccommodationController@register');
    Route::get('searchAccommodation', 'AccommodationController@search');
    Route::get('get', 'AccommodationController@getOne');
    Route::put('editAccommodation', 'AccommodationController@editAccommodation');
    Route::put('quickEdit', 'AccommodationController@quickEdit');
    Route::put('delete/{id}', 'AccommodationController@delete');
    Route::put('approve/{id}', 'AccommodationController@approveAccommodation');
    Route::delete('deleteImage', 'AccommodationImageController@deleteImage');
});
Route::group([

    'middleware' => 'api',
    'prefix' => 'accommodationType'

], function () {

    Route::get('getAccommodationTypes', 'AccommodationTypeController@getAll');
});



Route::group([

    'middleware' => 'api',
    'prefix' => 'room'

], function () {

    Route::post('register', 'RoomController@register');
    Route::get('get', 'RoomController@getRooms');
    Route::get('getOne', 'RoomController@getOne');
    Route::post('reservation', 'ReservationController@roomReservation');
    Route::put('delete/{id}', 'RoomController@delete');
    Route::put('editRoom', 'RoomController@editRoom');
});
