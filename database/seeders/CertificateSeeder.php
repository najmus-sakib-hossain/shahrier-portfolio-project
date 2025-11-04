<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Certificate;

class CertificateSeeder extends Seeder
{
    public function run(): void
    {
        $certificates = [
            [
                'title' => 'AWS Solutions Architect',
                'issuer' => 'Amazon Web Services',
                'description' => 'Professional level cloud architecture certification',
                'image' => './assets/technology/cert-aws.png',
                'certificate_url' => 'https://aws.amazon.com/certification',
                'issue_date' => now()->subYears(2),
                'expiry_date' => now()->addYear(),
                'category' => 'Cloud',
                'order' => 1,
            ],
            [
                'title' => 'Certified Ethical Hacker',
                'issuer' => 'EC-Council',
                'description' => 'Advanced cybersecurity certification',
                'image' => './assets/technology/cert-ceh.png',
                'certificate_url' => 'https://www.eccouncil.org/programs/certified-ethical-hacker-ceh',
                'issue_date' => now()->subYears(3),
                'expiry_date' => null,
                'category' => 'Security',
                'order' => 2,
            ],
        ];

        foreach ($certificates as $cert) {
            Certificate::create($cert);
        }
    }
}
