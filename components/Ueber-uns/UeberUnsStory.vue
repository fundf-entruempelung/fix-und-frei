<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="/team.jpeg"
            alt="Fix & Frei Umzüge und Entrümpelung Team"
            class="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
          />
        </div>
        <div class="space-y-6">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900">
            Erfahrung trifft auf <span class="text-brand-600">frischen Elan</span>
          </h2>
          <p class="text-lg text-gray-600 leading-relaxed">
            Fix & Frei Umzüge und Entrümpelung ist ein neu gegründetes Unternehmen mit einem erfahrenen Team.
            Unser Geschäftsführer bringt langjährige Erfahrung in der Entrümpelungs- und Umzugsbranche mit.
          </p>
          <p class="text-lg text-gray-600 leading-relaxed">
            Diese Expertise kombinieren wir mit modernem Service und persönlicher Betreuung.
            Bei uns bekommen Sie keine anonyme Dienstleistung, sondern einen echten Partner an Ihrer Seite.
          </p>
          <ul class="space-y-4">
            <li class="flex items-start">
              <CheckCircle class="h-6 w-6 text-brand-600 mr-3 flex-shrink-0 mt-0.5" />
              <span class="text-gray-700">Langjährige Branchenerfahrung des Inhabers</span>
            </li>
            <li class="flex items-start">
              <CheckCircle class="h-6 w-6 text-brand-600 mr-3 flex-shrink-0 mt-0.5" />
              <span class="text-gray-700">Persönliche Betreuung bei jedem Auftrag</span>
            </li>
            <li class="flex items-start">
              <CheckCircle class="h-6 w-6 text-brand-600 mr-3 flex-shrink-0 mt-0.5" />
              <span class="text-gray-700">Flexibel und kundenorientiert</span>
            </li>
            <li class="flex items-start">
              <CheckCircle class="h-6 w-6 text-brand-600 mr-3 flex-shrink-0 mt-0.5" />
              <span class="text-gray-700">Faire Preise ohne versteckte Kosten</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CheckCircle } from 'lucide-vue-next'
</script>
