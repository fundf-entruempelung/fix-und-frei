<template>
  <section id="services" class="py-20 bg-gradient-to-b from-white to-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
          Unsere <span class="text-brand-600">Leistungen</span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Komplettservice für alle Ihre Bedürfnisse - von Entrümpelung bis Transport
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <a v-for="service in services" :key="service.title"
          :href="`/leistungen#${service.anchor}`"
          class="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300">
          <div :class="`${service.color} p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform`">
            <component :is="service.icon" class="h-8 w-8 text-white" />
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-600 transition-colors">{{ service.title }}</h3>
          <p class="text-gray-600 mb-6 leading-relaxed">{{ service.description }}</p>
          <ul class="space-y-2">
            <li v-for="feature in service.features" :key="feature"
              class="flex items-center text-sm text-gray-600">
              <Check class="h-4 w-4 text-brand-600 mr-2 flex-shrink-0" />
              {{ feature }}
            </li>
          </ul>
          <div class="mt-6 flex items-center text-brand-600 font-semibold group-hover:gap-2 transition-all">
            Mehr erfahren
            <ArrowRight class="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </a>
      </div>

      <!-- CTA Banner -->
      <div class="bg-gradient-to-r from-brand-600 to-brand-700 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
        <h3 class="text-2xl md:text-3xl font-bold mb-4">
          Noch nicht das Richtige gefunden?
        </h3>
        <p class="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
          Entdecken Sie alle unsere Dienstleistungen und finden Sie die perfekte Lösung für Ihr Projekt
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/leistungen"
            class="bg-white text-brand-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
            <ListIcon class="h-5 w-5 mr-2" />
            Alle Leistungen ansehen
          </NuxtLink>
          <NuxtLink to="/kontakt"
            class="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-brand-600 transition-colors inline-flex items-center justify-center">
            <PhoneIcon class="h-5 w-5 mr-2" />
            Beratung anfragen
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Trash2, Building2, Home, KeyRound, Recycle, Truck, Check, ArrowRight, ListIcon, PhoneIcon, Package } from 'lucide-vue-next'

const services = [
  {
    title: 'Entrümpelung',
    description: 'Professionelle Entrümpelung von Kellern, Dachböden, Garagen und Wohnungen - schnell und zuverlässig.',
    icon: Trash2,
    color: 'bg-[#2f7ebd]',
    anchor: 'entruempelung',
    features: [
      'Keller & Dachboden',
      'Garagen & Schuppen',
      'Messie-Wohnungen',
      'Gewerberäume'
    ]
  },
  {
    title: 'Umzüge',
    description: 'Professionelle Umzugsdienstleistungen für Privatpersonen - stressfrei und zuverlässig.',
    icon: Package,
    color: 'bg-green-600',
    anchor: 'umzuege',
    features: [
      'Privatumzüge',
      'Fernumzüge',
      'Seniorenumzüge',
      'Komplettservice'
    ]
  },
  {
    title: 'Firmenumzug',
    description: 'Effiziente Büroumzüge mit minimaler Ausfallzeit - auch außerhalb der Geschäftszeiten.',
    icon: Building2,
    color: 'bg-blue-600',
    anchor: 'firmenumzug',
    features: [
      'Büroumzüge',
      'IT-Umzug',
      'Möbelmontage',
      'Flexible Termine'
    ]
  },
  {
    title: 'Haushaltsauflösung',
    description: 'Komplette Haushaltsauflösung mit diskreter und respektvoller Abwicklung.',
    icon: Home,
    color: 'bg-purple-600',
    anchor: 'haushaltsaufloesung',
    features: [
      'Wohnungsräumung',
      'Wertgegenstände',
      'Besenrein',
      'Diskret'
    ]
  },
  {
    title: 'Wohnungsauflösung',
    description: 'Schnelle und fachgerechte Wohnungsauflösung zu fairen Preisen.',
    icon: KeyRound,
    color: 'bg-brand-600',
    anchor: 'wohnungsaufloesung',
    features: [
      'Schnelle Termine',
      'Faire Preise',
      'Entsorgung',
      'Komplettservice'
    ]
  },
  {
    title: 'Entsorgung',
    description: 'Umweltgerechte Entsorgung und fachgerechtes Recycling aller Materialien.',
    icon: Recycle,
    color: 'bg-red-600',
    anchor: 'entsorgung',
    features: [
      'Sperrmüll',
      'Elektroschrott',
      'Sondermüll',
      'Recycling'
    ]
  },
  {
    title: 'Transport',
    description: 'Zuverlässiger Transportservice für Möbel und Güter in Stade & Umgebung.',
    icon: Truck,
    color: 'bg-teal-600',
    anchor: 'transport',
    features: [
      'Möbeltransport',
      'Kurierdienst',
      'Stade & Umgebung',
      'Versichert'
    ]
  }
]
</script>