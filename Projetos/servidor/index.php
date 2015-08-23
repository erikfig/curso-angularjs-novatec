<?php

require 'bootstrap.php';

use App\Models\User;

$app->get('/', function() {
	echo 'Hello World';
});

$app->get('/users', function() {
	$data = User::get();
	echo json_encode($data->toArray());
});

$app->get('/users/:id', function($id) {
	$data = User::where('id', $id)->first();
	echo json_encode($data->toArray());
});

$app->post('/users', function() {
	$data = User::create($_POST);
	echo json_encode($data->toArray());
});

$app->map('/users/:id', function($id) {
	$data = User::where('id', $id)->first();
	$data->update($_POST);
	echo json_encode($data->toArray());
})->via('post', 'put');

$app->delete('/users/:id', function($id) {
	$data = User::where('id', $id)->first();
	$data->delete();
	echo json_encode(['msg'=>'success']);
});

$app->run();