<?php

namespace Modules\HDBank\Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class HDBankDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        // $this->call("OthersTableSeeder");
        DB::table('payment_methods')->update([
            'active_status' => 0
        ]);

        DB::table('payment_methods')->insert([
            [
                'method' => 'HDBank',
                'type' => 'System',
                'active_status' => 1,
                'module_status' => 1,
                'logo' => 'public/frontend/infixlmstheme/img/bank/hdbank.png',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
