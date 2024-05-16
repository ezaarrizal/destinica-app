<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;


class ArticlesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('articles')->insert([
            'judul_artikel' => fake()->title(),
            'isi_artikel' => fake()->paragraph(2, true),
            'author' => fake()->email(),
            'gambar' => Str::random(50),
            
        ]);
    }
}
