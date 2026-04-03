<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          So läuft Ihr Umzug ab
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          In 5 einfachen Schritten zu Ihrem stressfreien Umzug. 
          Wir begleiten Sie von der ersten Beratung bis zum letzten Karton.
        </p>
      </div>

      <div class="relative">
        <!-- Process Steps -->
        <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div v-for="(step, index) in processSteps" :key="step.id" class="relative">
            <!-- Step Number -->
            <div class="flex items-center justify-center w-16 h-16 bg-[#2f7ebd] text-white rounded-full text-xl font-bold mx-auto mb-4">
              {{ index + 1 }}
            </div>
            
            <!-- Connector Line (hidden on last item) -->
            <div v-if="index < processSteps.length - 1" class="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-brand-200 transform translate-x-8"></div>
            
            <!-- Step Content -->
            <div class="text-center">
              <component :is="step.icon" class="h-12 w-12 text-brand-600 mx-auto mb-4" />
              <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ step.title }}</h3>
              <p class="text-gray-600 text-sm">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="mt-16 text-center">
        <div class="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">
            Bereit für Ihren Umzug?
          </h3>
          <p class="text-gray-600 mb-6">
            Kontaktieren Sie uns noch heute für ein kostenloses und unverbindliches Angebot.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+4915213945134" class="bg-[#2f7ebd] text-white px-6 py-3 rounded-lg hover:bg-brand-700 transition-colors flex items-center justify-center">
              <PhoneIcon class="h-5 w-5 mr-2" />
              Jetzt anrufen
            </a>
            <a href="#kontakt" class="border-2 border-brand-600 text-brand-600 px-6 py-3 rounded-lg hover:bg-[#2f7ebd] hover:text-white transition-colors flex items-center justify-center">
              <MailIcon class="h-5 w-5 mr-2" />
              Angebot anfordern
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { 
  PhoneIcon, 
  MailIcon, 
  CalendarIcon, 
  ClipboardListIcon, 
  TruckIcon, 
  PackageIcon, 
  CheckCircleIcon 
} from 'lucide-vue-next'

const processSteps = [
  {
    id: 1,
    title: 'Beratung',
    description: 'Kostenlose Besichtigung und individuelle Beratung vor Ort',
    icon: PhoneIcon
  },
  {
    id: 2,
    title: 'Angebot',
    description: 'Transparentes Festpreisangebot ohne versteckte Kosten',
    icon: ClipboardListIcon
  },
  {
    id: 3,
    title: 'Planung',
    description: 'Detaillierte Umzugsplanung und Terminkoordination',
    icon: CalendarIcon
  },
  {
    id: 4,
    title: 'Durchführung',
    description: 'Professioneller Umzug durch unser erfahrenes Team',
    icon: TruckIcon
  },
  {
    id: 5,
    title: 'Abschluss',
    description: 'Übergabe und Zufriedenheitskontrolle am neuen Standort',
    icon: CheckCircleIcon
  }
]
</script>
