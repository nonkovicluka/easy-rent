<?php

use Illuminate\Database\Seeder;
use App\Role;

class RoleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $role_admin = new Role();
        $role_admin->name = 'Admin';
        $role_admin->save();

        $role_manager = new Role();
        $role_manager->name = 'Manager';
        $role_manager->save();
        
        $role_user = new Role();
        $role_user->name = 'User';
        $role_user->save();
    }
}
