<?php

namespace Tests\Feature;

use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    public function test_the_shell_renders_the_expected_inertia_page(): void
    {
        $this->withoutVite()->get('/')->assertOk()->assertInertia(fn (Assert $page) => $page->component('Home')->has('projectName'));
    }
}
