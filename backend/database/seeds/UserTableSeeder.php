<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Role;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $role_admin = Role::where('name', 'admin')->first();
        $role_manager  = Role::where('name', 'manager')->first();
        $role_user  = Role::where('name', 'user')->first();
        
        $admin = new User();
        $admin->name = 'User 1';
        $admin->email = 'user1@user.com';
        $admin->password = 'pass';
        $admin->role_id = 1;
        $admin->save();
    

        $manager = new User();
        $manager->name = 'User 2';
        $manager->email = 'user2@user.com';
        $manager->password = 'pass';
        $manager->role_id = 2;
        $manager->save();
        
        $user = new User();
        $user->name = 'User 3';
        $user->email = 'user3@user.com';
        $user->password = 'pass';
        $user->role_id = 3;
        $user->save();
    }
}
