<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Zertifizierungen & Auszeichnungen</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Unsere Qualität wird durch offizielle Zertifizierungen und Kundenbewertungen bestätigt
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div class="bg-white rounded-lg shadow-lg p-6 text-center">
          <div class="bg-brand-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <AwardIcon class="h-8 w-8 text-brand-600" />
          </div>
          <h3 class="font-semibold text-gray-900 mb-2">IHK Zertifiziert</h3>
          <p class="text-sm text-gray-600">Offiziell anerkanntes Umzugsunternehmen</p>
        </div>

        <div class="bg-white rounded-lg shadow-lg p-6 text-center">
          <div class="bg-brand-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <ShieldIcon class="h-8 w-8 text-brand-600" />
          </div>
          <h3 class="font-semibold text-gray-900 mb-2">Vollversichert</h3>
          <p class="text-sm text-gray-600">Umfassender Versicherungsschutz</p>
        </div>

        <div class="bg-white rounded-lg shadow-lg p-6 text-center">
          <div class="bg-brand-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <TruckIcon class="h-8 w-8 text-brand-600" />
          </div>
          <h3 class="font-semibold text-gray-900 mb-2">TÜV Geprüft</h3>
          <p class="text-sm text-gray-600">Regelmäßige Fahrzeugprüfungen</p>
        </div>

        <div class="bg-white rounded-lg shadow-lg p-6 text-center">
          <div class="bg-brand-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <StarIcon class="h-8 w-8 text-brand-600" />
          </div>
          <h3 class="font-semibold text-gray-900 mb-2">5★ Bewertung</h3>
          <p class="text-sm text-gray-600">Durchschnitt bei Google Reviews</p>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-lg p-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Warum Fix & Frei Umzüge und Entrümpelung wählen?</h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <CheckCircleIcon class="h-6 w-6 text-brand-600 mr-3 mt-0.5 flex-shrink-0" />
                <span class="text-gray-700">Langjährige Erfahrung im Umzugsgeschäft</span>
              </li>
              <li class="flex items-start">
                <CheckCircleIcon class="h-6 w-6 text-brand-600 mr-3 mt-0.5 flex-shrink-0" />
                <span class="text-gray-700">Professionelles und geschultes Personal</span>
              </li>
              <li class="flex items-start">
                <CheckCircleIcon class="h-6 w-6 text-brand-600 mr-3 mt-0.5 flex-shrink-0" />
                <span class="text-gray-700">Moderne Fahrzeugflotte und Ausrüstung</span>
              </li>
              <li class="flex items-start">
                <CheckCircleIcon class="h-6 w-6 text-brand-600 mr-3 mt-0.5 flex-shrink-0" />
                <span class="text-gray-700">Transparente Preisgestaltung ohne versteckte Kosten</span>
              </li>
              <li class="flex items-start">
                <CheckCircleIcon class="h-6 w-6 text-brand-600 mr-3 mt-0.5 flex-shrink-0" />
                <span class="text-gray-700">Umfassender Versicherungsschutz für Ihr Eigentum</span>
              </li>
            </ul>
          </div>
          <div class="text-center">
            <img 
              src="/public/check24-profi.webp" 
              alt="Zertifizierungen und Auszeichnungen" 
              class="rounded-lg shadow-md mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { AwardIcon, ShieldIcon, TruckIcon, StarIcon, CheckCircleIcon } from 'lucide-vue-next'
</script>
