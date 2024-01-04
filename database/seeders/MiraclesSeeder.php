<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MiraclesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if (DB::table('users')->count() > 0) {
            DB::table('miracles')->insert([
                [
                    "title" => 'Miracle 1',
                    "content" => 'Miracle 1 description',
                    "user_id" => 1,
                ],
                [
                    "title" => 'Miracle 2',
                    "content" => 'Miracle 2 description',
                    "user_id" => 1,
                ],
                [
                    "title" => 'Miracle 3',
                    "content" => 'Miracle 3 description',
                    "user_id" => 1,
                ]
            ]);
        } else {
            DB::table('miracles')->insert([
                [
                    "title" => 'Miracle 1',
                    "content" => 'Miracle 1 description',
                ],
                [
                    "title" => 'Miracle 2',
                    "content" => 'Miracle 2 description',
                ],
                [
                    "title" => 'Miracle 3',
                    "content" => 'Miracle 3 description',
                ]
            ]);
        }
    }
}
