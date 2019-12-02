<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{

    public function getUsers()
    {
        return User::with('role')
        ->where('banned', false)
        ->get();
    }


    public function banUser(Request $request)
    {

        $id = $request->route('id');

        $user =  User::find($id);

        $user->banned = true;

        $user->save();    }
}
