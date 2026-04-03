<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Transparente Preise
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Faire und transparente Preisgestaltung ohne versteckte Kosten.
          Alle Preise verstehen sich inklusive Anfahrt im Stadtgebiet.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div v-for="pkg in pricingPackages" :key="pkg.id"
          class="bg-white rounded-xl shadow-lg border border-gray-200 p-8 relative"
          :class="{ 'ring-2 ring-brand-500 scale-105': pkg.popular }">

          <div v-if="pkg.popular" class="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span class="bg-[#2f7ebd] text-white px-4 py-1 rounded-full text-sm font-medium">
              Beliebteste Option
            </span>
          </div>

          <div class="text-center">
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ pkg.name }}</h3>
            <p class="text-gray-600 mb-6">{{ pkg.description }}</p>

            <div class="mb-6">
              <span class="text-4xl font-bold text-brand-600">{{ pkg.price }}</span>
              <span class="text-gray-500">{{ pkg.unit }}</span>
            </div>

            <ul class="space-y-3 mb-8">
              <li v-for="feature in pkg.features" :key="feature" class="flex items-center text-sm">
                <CheckIcon class="h-4 w-4 text-brand-600 mr-3 flex-shrink-0" />
                <span class="text-gray-600">{{ feature }}</span>
              </li>
            </ul>

            <a href="#kontakt" class="w-full py-3 px-6 rounded-lg font-medium transition-colors" :class="pkg.popular
              ? 'bg-[#2f7ebd] text-white hover:bg-brand-700'
              : 'border-2 border-brand-600 text-brand-600 hover:bg-[#2f7ebd] hover:text-white'">
              Angebot anfordern
            </a>
          </div>
        </div>

      </div>

      <!-- Additional Info -->
      <div class="bg-gray-50 rounded-xl p-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Zusätzliche Leistungen</h3>
            <ul class="space-y-2">
              <li v-for="service in additionalServices" :key="service.name" class="flex justify-between">
                <span class="text-gray-600">{{ service.name }}</span>
                <span class="font-medium text-gray-900">{{ service.price }}</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Wichtige Hinweise</h3>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex items-start">
                <InfoIcon class="h-4 w-4 text-brand-600 mr-2 mt-0.5 flex-shrink-0" />
                Alle Preise verstehen sich inklusive MwSt.
              </li>
              <li class="flex items-start">
                <InfoIcon class="h-4 w-4 text-brand-600 mr-2 mt-0.5 flex-shrink-0" />
                Anfahrt im Stadtgebiet kostenfrei
              </li>
              <li class="flex items-start">
                <InfoIcon class="h-4 w-4 text-brand-600 mr-2 mt-0.5 flex-shrink-0" />
                Mindestabnahme: 2 Stunden
              </li>
              <li class="flex items-start">
                <InfoIcon class="h-4 w-4 text-brand-600 mr-2 mt-0.5 flex-shrink-0" />
                Kostenlose Besichtigung und Beratung
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CheckIcon, InfoIcon } from 'lucide-vue-next'

const pricingPackages = [
  {
    id: 1,
    name: 'Basis',
    description: 'Für kleinere Umzüge und Transporte',
    price: '89€',
    unit: '/Stunde',
    popular: false,
    features: [
      '2 erfahrene Umzugshelfer',
      'Transporter bis 3,5t',
      'Grundausstattung Werkzeug',
      'Versicherungsschutz',
      'Anfahrt inklusive'
    ]
  },
  {
    id: 2,
    name: 'Komfort',
    description: 'Unser beliebtestes Paket für Privatumzüge',
    price: '119€',
    unit: '/Stunde',
    popular: true,
    features: [
      '3 erfahrene Umzugshelfer',
      'LKW bis 7,5t',
      'Komplette Werkzeugausstattung',
      'Möbelschutzdecken',
      'Verpackungsmaterial',
      'Vollversicherung',
      'Anfahrt inklusive'
    ]
  },
  {
    id: 3,
    name: 'Premium',
    description: 'Für große Umzüge und Büroumzüge',
    price: '149€',
    unit: '/Stunde',
    popular: false,
    features: [
      '4 erfahrene Umzugshelfer',
      'LKW bis 12t',
      'Professionelle Ausrüstung',
      'Möbelmontage/-demontage',
      'Verpackungsservice',
      'Vollversicherung',
      'Projektmanagement',
      'Anfahrt inklusive'
    ]
  }
]

const additionalServices = [
  { name: 'Verpackungsservice', price: '45€/Std' },
  { name: 'Möbelmontage', price: '55€/Std' },
  { name: 'Entrümpelung', price: '35€/Std' },
  { name: 'Reinigungsservice', price: '25€/Std' },
  { name: 'Lagerung', price: 'ab 3€/m³' },
  { name: 'Klaviertransport', price: 'ab 150€' }
]
</script>
