<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Tools\ImageController;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\SignupRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class AuthController extends Controller
{
    // protected $imageController;
    // public function __construct(ImageController $imageController)
    // {
    //     $this->imageController = $imageController;
    // }
    public function signup(SignupRequest $request)
    {
        $data = $request->validated();
    
        if (isset($data['password'])) {
            $data['password'] = bcrypt($data['password']);
        }
    
        $data['image'] = 'images/users/default-profile.png';
        $data['role'] = '0';
    
        $user = User::create($data);
    
        $token = $user->createToken('main')->plainTextToken;
    
        return response([
            'message' => 'User added successfully',
            'user' => new UserResource($user),
            'token' => $token
        ]);
    }

    public function login(LoginRequest $request){
        $credentials = $request->validated();
        if (!Auth::attempt($credentials)) {
            return response([
                'message' => 'Provided email or password is incorrect'
            ], 422);
        }

        /** @var \App\Models\User $user */
        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;
        return response([
            'message' => 'User added successfully',
            'user' => new UserResource($user),
            'token' => $token
        ]);
    }

    public function logout(Request $request){
        /** @var \App\Models\User $user */
        $user = $request->user();
        $user->currentAccessToken()->delete();
        return response('', 204);
    }
}
