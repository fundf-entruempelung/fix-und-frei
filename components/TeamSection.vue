<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Image -->
        <div class="relative">
          <img
            src="/team2.jpeg"
            alt="Professioneller Umzugsservice"
            class="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
          />
          <div class="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-xl shadow-lg hidden md:block">
            <div class="text-center">
              <div class="text-3xl font-bold">100%</div>
              <div class="text-sm opacity-90">Einsatz</div>
            </div>
          </div>
        </div>

        <!-- Content -->
        <div class="space-y-6">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900">
            Professionell <span class="text-primary">für Sie</span> im Einsatz
          </h2>
          <p class="text-lg text-gray-600 leading-relaxed">
            Bei Fix & Frei Umzüge und Entrümpelung arbeiten erfahrene und engagierte Mitarbeiter,
            die jeden Auftrag mit Sorgfalt und Professionalität erledigen.
          </p>
          <ul class="space-y-4">
            <li class="flex items-start">
              <CheckCircle class="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
              <span class="text-gray-700">Geschultes und erfahrenes Personal</span>
            </li>
            <li class="flex items-start">
              <CheckCircle class="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
              <span class="text-gray-700">Sorgfältiger Umgang mit Ihrem Eigentum</span>
            </li>
            <li class="flex items-start">
              <CheckCircle class="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
              <span class="text-gray-700">Pünktlich und zuverlässig</span>
            </li>
            <li class="flex items-start">
              <CheckCircle class="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
              <span class="text-gray-700">Freundlicher und respektvoller Service</span>
            </li>
          </ul>
          <div class="pt-4">
            <a
              href="tel:+4915213945134"
              class="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Phone class="mr-2 h-5 w-5" />
              Jetzt anrufen
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CheckCircle, Phone } from 'lucide-vue-next'
</script>
