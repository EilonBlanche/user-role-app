<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // Fill Roles table
        $role = ['Admin', 'Super Admin', 'User', 'Approver'];
        foreach ($role as $roleName) {
            Role::firstOrCreate(['description' => $roleName]);
        }

        // Fill Users table
        $users = [
            ['name' => 'Admin Test', 'email' => 'admin@example.com','role_id' => 1],
            ['name' => 'Super Admin Test', 'email' => 'superadmin@example.com', 'role_id' => 2],
            ['name' => 'User Test', 'email' => 'user@example.com', 'role_id' => 3],
            ['name' => 'Approver Test', 'email' => 'approver@example.com','role_id' => 4],
        ];
        foreach ($users as $u) {
            User::firstOrCreate(['email' => $u['email']], $u);
        }
    }
}
