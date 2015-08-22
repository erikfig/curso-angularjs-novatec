<?php

require 'bootstrap.php';

$app->get('/', function() {
	echo 'Hello World';
});

$app->run();