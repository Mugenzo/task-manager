<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Stage extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'color',
        'order',
        'desk_id'
    ];

    /**
     * @return BelongsTo
     */
    public function desk(): BelongsTo
    {
        return $this->belongsTo(Desk::class);
    }
}
