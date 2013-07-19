<?php

namespace Vantoozz\Odkl;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Event;

Route::get('odkl/auth', function(){


    $user=null;
    if($code=Input::get('code', null)){
        $odkl=new Odkl;
        try{
            $data=$odkl->get_token($code, URL::to('odkl/auth'));
            Event::fire('odkl.login', array($data));
            return View::make('odkl::success', array('user' => $data['user']));

        }
        catch(Exception $e){}
    }


    return View::make('odkl::fail');


});