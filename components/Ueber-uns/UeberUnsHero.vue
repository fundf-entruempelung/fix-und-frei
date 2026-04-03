<template>
  <section class="bg-gradient-to-br from-brand-50 to-blue-50 py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
          Über <span class="text-brand-600">Fix & Frei Umzüge und Entrümpelung</span>
        </h1>
        <p class="text-xl text-gray-600 mb-12 leading-relaxed">
          Wir sind Ihr vertrauensvoller Partner für Entrümpelung und Entsorgung in Stade & Umgebung.
          Mit Erfahrung, Professionalität und einem persönlichen Service machen wir Ihre Entrümpelung stressfrei.
        </p>

        <!-- Stats Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div class="bg-white p-8 rounded-xl shadow-lg">
            <div class="text-4xl font-bold text-brand-600 mb-2">100%</div>
            <div class="text-gray-700 font-medium">Einsatz</div>
          </div>
          <div class="bg-white p-8 rounded-xl shadow-lg">
            <div class="text-4xl font-bold text-brand-600 mb-2">1500+</div>
            <div class="text-gray-700 font-medium">Erfolgreiche Projekte</div>
          </div>
          <div class="bg-white p-8 rounded-xl shadow-lg">
            <div class="text-4xl font-bold text-brand-600 mb-2">100%</div>
            <div class="text-gray-700 font-medium">Kundenzufriedenheit</div>
          </div>
        </div>

        <!-- Key Features -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="flex flex-col items-center">
            <div class="bg-brand-100 p-4 rounded-full mb-3">
              <CheckCircleIcon class="h-8 w-8 text-brand-600" />
            </div>
            <span class="text-gray-700 font-medium text-center">Schnell & Zuverlässig</span>
          </div>
          <div class="flex flex-col items-center">
            <div class="bg-brand-100 p-4 rounded-full mb-3">
              <CheckCircleIcon class="h-8 w-8 text-brand-600" />
            </div>
            <span class="text-gray-700 font-medium text-center">Faire Preise</span>
          </div>
          <div class="flex flex-col items-center">
            <div class="bg-brand-100 p-4 rounded-full mb-3">
              <CheckCircleIcon class="h-8 w-8 text-brand-600" />
            </div>
            <span class="text-gray-700 font-medium text-center">Deutschlandweit</span>
          </div>
          <div class="flex flex-col items-center">
            <div class="bg-brand-100 p-4 rounded-full mb-3">
              <CheckCircleIcon class="h-8 w-8 text-brand-600" />
            </div>
            <span class="text-gray-700 font-medium text-center">Fachgerechte Entsorgung</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CheckCircleIcon } from 'lucide-vue-next'
</script>
