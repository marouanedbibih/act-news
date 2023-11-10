<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vedio extends Model
{
    use HasFactory;
    protected $fillable = [
        'url',
        'duration',
        'post_id'
    ];

    public function post(){
        return $this->belongsTo(Post::class);
    }
}
