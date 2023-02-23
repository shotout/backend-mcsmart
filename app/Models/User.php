<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    // list status
    const IN_ACTIVE = 1;
    const ACTIVE = 2;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function icon()
    {
        return $this->belongsTo('\App\Models\Icon')->with('image');
    }

    public function schedule()
    {
        return $this->hasOne('\App\Models\Schedule');
    }

    public function topics()
    {
        return $this->belongsToMany('\App\Models\Topic', 'user_topic');
    }

    public function subscription()
    {
        return $this->hasOne('\App\Models\Subscription')->where('status', 2)->with('plan');
    }

    public function themes()
    {
        return $this->belongsToMany('\App\Models\Theme', 'user_themes')->with('background');
    }

    public function categories()
    {
        return $this->belongsToMany('\App\Models\Category', 'user_category');
    }
}
