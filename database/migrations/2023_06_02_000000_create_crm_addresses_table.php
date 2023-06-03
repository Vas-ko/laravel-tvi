<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('crm_addresses', function (Blueprint $table) {
            $table->id();
            $table->string('postcode', 10);
            $table->string('line_1');
            $table->string('line_2')->nullable();
            $table->string('line_3')->nullable();
            $table->string('town_city')->nullable();
            $table->string('county')->nullable();
            $table->string('country')->nullable();
            $table->unsignedBigInteger('contact_id')->nullable();
            $table->timestamps();

            $table->index('postcode');
            $table->unique([
                    'postcode',
                    'line_1',
                    'contact_id'
                ],
                'crm_addresses_unique'
            );

            $table->foreign('contact_id')
                ->references('id')
                ->on('crm_contacts');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('crm_addresses');
    }
};
