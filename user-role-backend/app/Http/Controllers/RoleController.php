<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Role;

class RoleController extends Controller
{
    public function index(){
        $roles = Role::all();
        return response()->json([
            'success' => true,
            'roles' => $roles->makeHidden(['created_at', 'updated_at'])
        ]);
    }
}
