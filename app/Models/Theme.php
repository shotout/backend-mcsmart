<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Theme extends Model
{
    use HasFactory;

    // list status
    const IN_ACTIVE = 1;
    const ACTIVE = 2;

    public function background()
    {
        return $this->hasOne('\App\Models\Media', 'owner_id')->where('type', 'theme');
    }
}
