<template>
  <section class="bg-gradient-to-br from-brand-50 to-blue-50 py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Unsere <span class="text-brand-600">Leistungen</span>
        </h1>
        <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Von Entrümpelung über Umzüge und Haushaltsauflösung bis hin zu Entsorgung und Transport -
          wir bieten Ihnen umfassende Dienstleistungen für jeden Bedarf.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#entruempelung" class="bg-[#2f7ebd] text-white px-8 py-3 rounded-lg hover:bg-brand-700 transition-colors flex items-center justify-center">
            <ListIcon class="h-5 w-5 mr-2" />
            Leistungen entdecken
          </a>
          <NuxtLink to="/kontakt" class="border-2 border-brand-600 text-brand-600 px-8 py-3 rounded-lg hover:bg-[#2f7ebd] hover:text-white transition-colors flex items-center justify-center">
            <PhoneIcon class="h-5 w-5 mr-2" />
            Kostenlos beraten lassen
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ListIcon, PhoneIcon } from 'lucide-vue-next'
</script>
