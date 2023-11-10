<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Section extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'name',
        'description',
        'cover_image'
    ];


    public function responsables()
    {
        return $this->hasMany(Responsable::class);
    }

    public function article(){
        return $this->hasMany(Article::class);
    }
}
