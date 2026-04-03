<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Unsere Werte</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Diese Prinzipien leiten uns bei jedem Umzug und machen uns zu Ihrem vertrauenswürdigen Partner
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="text-center p-6">
          <div class="bg-brand-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <ShieldCheckIcon class="h-8 w-8 text-brand-600" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">Vertrauen</h3>
          <p class="text-gray-600">
            Ihr Hab und Gut ist bei uns in sicheren Händen. Wir behandeln Ihre Gegenstände wie unsere eigenen.
          </p>
        </div>

        <div class="text-center p-6">
          <div class="bg-brand-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <ClockIcon class="h-8 w-8 text-brand-600" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">Pünktlichkeit</h3>
          <p class="text-gray-600">
            Wir halten unsere Termine ein und respektieren Ihre Zeit. Verlässlichkeit ist unser Markenzeichen.
          </p>
        </div>

        <div class="text-center p-6">
          <div class="bg-brand-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <HeartIcon class="h-8 w-8 text-brand-600" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">Sorgfalt</h3>
          <p class="text-gray-600">
            Jeder Umzug wird mit größter Sorgfalt geplant und durchgeführt. Ihre Zufriedenheit steht im Mittelpunkt.
          </p>
        </div>

        <div class="text-center p-6">
          <div class="bg-brand-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <UsersIcon class="h-8 w-8 text-brand-600" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">Teamwork</h3>
          <p class="text-gray-600">
            Unser eingespieltes Team arbeitet Hand in Hand, um Ihren Umzug effizient zu gestalten.
          </p>
        </div>

        <div class="text-center p-6">
          <div class="bg-brand-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <StarIcon class="h-8 w-8 text-brand-600" />
          </div>
          <h3 class="text-xl font-semibeld text-gray-900 mb-3">Qualität</h3>
          <p class="text-gray-600">
            Höchste Qualitätsstandards bei Service, Material und Ausführung sind für uns selbstverständlich.
          </p>
        </div>

        <div class="text-center p-6">
          <div class="bg-brand-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <PhoneIcon class="h-8 w-8 text-brand-600" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">Erreichbarkeit</h3>
          <p class="text-gray-600">
            Wir sind immer für Sie da - vor, während und nach Ihrem Umzug. Persönlicher Service garantiert.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ShieldCheckIcon, ClockIcon, HeartIcon, UsersIcon, StarIcon, PhoneIcon } from 'lucide-vue-next'
</script>
