<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;
    protected $fillable = [
        'post_id',
        'section_id',
        'responsable_id'

    ];

    public function post(){
        return $this->belongsTo(Post::class);
    }

    public function section(){
        return $this->belongsTo(Section::class);
    }

    public function responsable(){
        return $this->belongsTo(Responsable::class);
    }
}
