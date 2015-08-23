<?php

require 'bootstrap.php';

use App\Models\User;

$app->get('/', function() {
	User::where('id', 1)->first();
	echo 'Hello World';
});

$app->run();