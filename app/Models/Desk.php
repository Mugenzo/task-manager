<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Desk extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'project_id'
    ];

    /**
     * @return HasMany
     */
    public function stages(): HasMany
    {
        return $this->hasMany(Stage::class);
    }
}
