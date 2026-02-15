'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Pricing() {
  const wordpressPackages = [
    {
      name: 'Silver (Basic)',
      price: '$300',
      popular: false,
      features: {
        platforms: 'WordPress',
        crm: 'Basic setup (1 tool)',
        pages: 'Up to 3 pages',
        forms: 'Basic form',
        design: 'Template-based',
        hosting: false,
        api: false,
        delivery: '7-10 days',
        revisions: '1 revision',
        maintenance: '$99/month'
      }
    },
    {
      name: 'Gold (Standard)',
      price: '$600',
      popular: true,
      features: {
        platforms: 'WordPress + 1 more',
        crm: 'CRM integration (2 tools)',
        pages: 'Up to 7 pages',
        forms: 'Custom forms + automation',
        design: 'Custom design',
        hosting: true,
        api: '1 integration',
        delivery: '10-15 days',
        revisions: '3 revisions',
        maintenance: '$149/month'
      }
    },
    {
      name: 'Platinum (Pro)',
      price: '$1,200',
      popular: false,
      features: {
        platforms: 'WordPress + custom integrations',
        crm: 'Full CRM automation suite',
        pages: 'Up to 12 pages',
        forms: 'Advanced forms + workflow',
        design: 'Premium UI/UX with animations',
        hosting: '✓ with SSL, CDN',
        api: 'Multiple integrations',
        delivery: '15-25 days',
        revisions: '5 revisions',
        maintenance: '$199/month'
      }
    }
  ];

  const shopifyPackages = [
    {
      name: 'Silver (Basic)',
      price: '$500',
      popular: false,
      features: {
        platforms: 'Shopify',
        crm: 'Basic setup (1 tool)',
        pages: 'Up to 3 pages',
        forms: 'Basic form',
        design: 'Template-based',
        hosting: false,
        api: false,
        delivery: '7-10 days',
        revisions: '1 revision',
        maintenance: '$99/month'
      }
    },
    {
      name: 'Gold (Standard)',
      price: '$900',
      popular: true,
      features: {
        platforms: 'Shopify + Apps',
        crm: 'CRM integration (2 tools)',
        pages: 'Up to 7 pages',
        forms: 'Custom forms + automation',
        design: 'Custom design',
        hosting: true,
        api: '1 integration',
        delivery: '10-15 days',
        revisions: '3 revisions',
        maintenance: '$149/month'
      }
    },
    {
      name: 'Platinum (Pro)',
      price: '$1,800',
      popular: false,
      features: {
        platforms: 'Shopify + custom integrations',
        crm: 'Full CRM automation suite',
        pages: 'Up to 12 pages',
        forms: 'Advanced forms + workflow',
        design: 'Premium UI/UX with animations',
        hosting: '✓ with SSL, CDN',
        api: 'Multiple integrations',
        delivery: '15-25 days',
        revisions: '5 revisions',
        maintenance: '$199/month'
      }
    }
  ];

  const nextjsPackages = [
    {
      name: 'Silver (Basic)',
      price: '$800',
      popular: false,
      features: {
        platforms: 'Next.js (Full-stack)',
        crm: 'Basic setup (1 tool)',
        pages: 'Up to 3 pages',
        forms: 'Basic form',
        design: 'Template-based',
        hosting: false,
        api: false,
        delivery: '7-10 days',
        revisions: '1 revision',
        maintenance: '$99/month'
      }
    },
    {
      name: 'Gold (Standard)',
      price: '$1,500',
      popular: true,
      features: {
        platforms: 'Next.js + Database',
        crm: 'CRM integration (2 tools)',
        pages: 'Up to 7 pages',
        forms: 'Custom forms + automation',
        design: 'Custom design',
        hosting: true,
        api: '1 integration',
        delivery: '10-15 days',
        revisions: '3 revisions',
        maintenance: '$149/month'
      }
    },
    {
      name: 'Platinum (Pro)',
      price: '$2,500',
      popular: false,
      features: {
        platforms: 'Next.js + Database + Integrations',
        crm: 'Full CRM automation suite',
        pages: 'Up to 12 pages',
        forms: 'Advanced forms + workflow',
        design: 'Premium UI/UX with animations',
        hosting: '✓ with SSL, CDN',
        api: 'Multiple integrations',
        delivery: '15-25 days',
        revisions: '5 revisions',
        maintenance: '$199/month'
      }
    }
  ];

  const PackageCard = ({ pkg, category }: { pkg: any; category: string }) => (
    <div className={`bg-white rounded-2xl shadow-lg border-2 overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-2 ${
      pkg.popular ? 'border-indigo-600 relative' : 'border-gray-200'
    }`}>
      {pkg.popular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white px-6 py-1 rounded-b-lg text-sm font-semibold">
          Popular
        </div>
      )}
      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
        <div className="mb-6">
          <span className="text-4xl font-bold text-indigo-600">{pkg.price}</span>
          <span className="text-gray-600 ml-2">One-Time Cost</span>
        </div>
        <div className="space-y-3 mb-8">
          <div className="flex justify-between items-center">
            <span className="text-gray-600 font-semibold">Website Platforms:</span>
            <span className="text-gray-900">{pkg.features.platforms}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 font-semibold">CRM Setup:</span>
            <span className="text-gray-900">{pkg.features.crm}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 font-semibold">Pages Included:</span>
            <span className="text-gray-900">{pkg.features.pages}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 font-semibold">Contact Forms:</span>
            <span className="text-gray-900">{pkg.features.forms}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 font-semibold">UI/UX Design:</span>
            <span className="text-gray-900">{pkg.features.design}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 font-semibold">Hosting/Domain:</span>
            <span className="text-gray-900">{pkg.features.hosting ? (typeof pkg.features.hosting === 'string' ? pkg.features.hosting : '✓') : '✗'}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 font-semibold">API Integrations:</span>
            <span className="text-gray-900">{pkg.features.api || '✗'}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 font-semibold">Delivery Time:</span>
            <span className="text-gray-900">{pkg.features.delivery}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 font-semibold">Revisions:</span>
            <span className="text-gray-900">{pkg.features.revisions}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 font-semibold">Monthly Maintenance:</span>
            <span className="text-gray-900">{pkg.features.maintenance}</span>
          </div>
        </div>
        <Link 
          href="/contact"
          className="block w-full bg-indigo-600 text-white text-center px-6 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
        >
          Get Started
        </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Pricing Header */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Complete Pricing Packages</h1>
          <p className="text-xl text-gray-600">Choose the perfect package for your project</p>
        </div>
      </section>

      {/* WordPress Packages */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="text-4xl">💻</span>
              <h2 className="text-3xl font-bold text-gray-900">WordPress Website Packages</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {wordpressPackages.map((pkg, index) => (
              <PackageCard key={index} pkg={pkg} category="wordpress" />
            ))}
          </div>
        </div>
      </section>

      {/* Shopify Packages */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="text-4xl">🛒</span>
              <h2 className="text-3xl font-bold text-gray-900">Shopify Store Packages</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {shopifyPackages.map((pkg, index) => (
              <PackageCard key={index} pkg={pkg} category="shopify" />
            ))}
          </div>
        </div>
      </section>

      {/* Next.js Packages */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="text-4xl">⚡</span>
              <h2 className="text-3xl font-bold text-gray-900">Custom Next.js Packages</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {nextjsPackages.map((pkg, index) => (
              <PackageCard key={index} pkg={pkg} category="nextjs" />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
