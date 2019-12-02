<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Role;
use App\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
        $credentials = request(['email', 'password']);
        
        $user = User::where('email', $credentials['email'])->first();

        $token = auth()->attempt($credentials);

        if (!$token || $user->banned) {
            return response()->json(['error' => 'Email or password doesn\'t exist'], 401);
        }


        return $this->respondWithToken($token);
    }


    public function register(Request $request)
    {

        if ($request['role'] === 'user' || !$request['role']) {
            $user = User::create([
                'name'     => $request['name'],
                'role_id'  => 3,
                'email'    => $request['email'],
                'password' => $request['password'],
            ]);
        } else {


            $user = User::create([
                'name'     => $request['name'],
                'role_id'  => 2,
                'email'    => $request['email'],
                'password' => $request['password'],
            ]);
        }


        return $this->login($user);
    }



    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    // public function refresh()
    // {
    //     return $this->respondWithToken(auth()->refresh());
    // }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {

        
        return response()->json([
            'token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL()
        ]);
    }
}
