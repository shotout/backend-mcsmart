<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserQuote extends Model
{
    use HasFactory;

    protected $table = 'user_quote';

    // list type
    const LIKE = 1;
    const DISLIKE = 2; 
}
