<?php

namespace App;

class ToArray
{
	public static $obj;

	public static function set($obj) {
		self::$obj = $obj;
	}

	public static function get()
	{
		$data = [];
		foreach (self::$obj as $k=>$v)
			$data[$k]=$v;
		return $data;
	}

	public static function getPost()
	{
		$obj = json_decode(file_get_contents('php://input'));
		self::set($obj);
		return self::get();
	}
}
