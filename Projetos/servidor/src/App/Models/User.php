<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
	public $fillable = ['name', 'email', 'password', 'idade', 'telefone'];

	public function setPasswordAttribute($value)
	{
		$this->attributes['password'] = password_hash($value, PASSWORD_BCRYPT);
	}
}