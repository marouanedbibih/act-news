<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Tools\ImageController;
use App\Http\Requests\User\StoreUserRequest;
use App\Http\Requests\User\UpdateUserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;

class UserController extends Controller
{
    protected $imageController;
    public function __construct(ImageController $imageController)
    {
        $this->imageController = $imageController;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::select(['id','name','email','image','role','created_at'])->orderBy('created_at', 'desc')
        ->paginate(10);
        return UserResource::collection($users);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request)
    {
        $data = $request->validated();
        if (isset($data['password'])) {
            $data['password'] = bcrypt($data['password']);
        }
        if (isset($data['image'])) {
            $relativePath = $this->imageController->uploadImage($data['image'], 'images/users/', '-user');
            $data['image'] = $relativePath;
        }else{
            $data['image'] = "images/users/default-profile.png";
        }
        /** @var \App\Models\User $user */
        $user = User::create($data);
        return response([
            'message' => 'User add sucufuly',
            'user' => new UserResource($user),
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        return new UserResource($user);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        $data = $request->validated();
        if (isset($data['password'])) {
            $data['password'] = bcrypt($data['password']);
        }
        // Check if image was given and save on local file system
        if (isset($data['image'])) {
            $relativePath = $this->imageController->uploadImage($data['image'],'images/users/','-user');
            $data['image'] = $relativePath;

            $this->imageController->removeImage($user->image);
        }

        /** @var \App\Models\User $user */
        $user->update($data);
        return response([
            'message' => 'User update sucufuly',
            'user' => new UserResource($user),
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        if ($user->image !== 'images/users/default-profile.png') {
            $this->imageController->removeImage($user->image);
        }
    
        $user->delete();
    
        return response([
            "message" => "user delete succufuly"
        ], 204);
    }
}
