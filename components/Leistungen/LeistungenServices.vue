<template>
  <section id="services" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Komplettservice für Ihren Umzug
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Wir bieten Ihnen alle Dienstleistungen rund um Ihren Umzug aus einer Hand - 
          professionell, zuverlässig und zu fairen Preisen.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="service in services" :key="service.id" class="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
          <div class="flex items-center mb-6">
            <div class="bg-brand-100 p-3 rounded-lg mr-4">
              <component :is="service.icon" class="h-8 w-8 text-brand-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900">{{ service.title }}</h3>
          </div>
          <p class="text-gray-600 mb-6">{{ service.description }}</p>
          <ul class="space-y-2">
            <li v-for="feature in service.features" :key="feature" class="flex items-center text-sm text-gray-600">
              <CheckIcon class="h-4 w-4 text-brand-600 mr-2 flex-shrink-0" />
              {{ feature }}
            </li>
          </ul>
          <div class="mt-6 pt-6 border-t border-gray-100">
            <p class="text-sm text-gray-500 mb-2">Ab</p>
            <p class="text-2xl font-bold text-brand-600">{{ service.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { 
  HomeIcon, 
  BuildingIcon, 
  TruckIcon, 
  PackageIcon, 
  ShieldCheckIcon, 
  Sparkles,
  CheckIcon 
} from 'lucide-vue-next'

const services = [
  {
    id: 1,
    title: 'Privatumzüge',
    description: 'Kompletter Umzugsservice für Privatpersonen und Familien mit professioneller Abwicklung.',
    icon: HomeIcon,
    features: [
      'Kostenlose Besichtigung',
      'Verpackungsmaterial inklusive',
      'Möbelmontage/-demontage',
      'Versicherungsschutz',
      'Entrümpelung auf Wunsch'
    ],
    price: '89€/Std'
  },
  {
    id: 2,
    title: 'Büroumzüge',
    description: 'Professionelle Büroumzüge mit minimaler Ausfallzeit für Ihr Unternehmen.',
    icon: BuildingIcon,
    features: [
      'Wochenend-/Abendtermine',
      'IT-Equipment Transport',
      'Aktenvernichtung',
      'Zwischenlagerung möglich',
      'Projektmanagement'
    ],
    price: '95€/Std'
  },
  {
    id: 3,
    title: 'Fernumzüge',
    description: 'Deutschlandweite und internationale Umzüge mit zuverlässiger Logistik.',
    icon: TruckIcon,
    features: [
      'Deutschlandweit',
      'EU-weite Umzüge',
      'Zollabwicklung',
      'GPS-Tracking',
      'Vollversicherung'
    ],
    price: 'auf Anfrage'
  },
  {
    id: 4,
    title: 'Verpackungsservice',
    description: 'Professionelles Ein- und Auspacken Ihrer wertvollen Gegenstände.',
    icon: PackageIcon,
    features: [
      'Hochwertiges Material',
      'Geschirr & Gläser',
      'Kunstwerke & Antiquitäten',
      'Elektronik sicher verpackt',
      'Beschriftung inklusive'
    ],
    price: '45€/Std'
  },
  {
    id: 5,
    title: 'Lagerung',
    description: 'Sichere Zwischenlagerung Ihrer Möbel und Gegenstände in unseren Lagerhallen.',
    icon: ShieldCheckIcon,
    features: [
      'Klimatisierte Räume',
      '24/7 Überwachung',
      'Flexible Laufzeiten',
      'Inventarlisten',
      'Versicherungsschutz'
    ],
    price: 'ab 3€/m³'
  },
  {
    id: 6,
    title: 'Reinigungsservice',
    description: 'Professionelle Endreinigung für Ihre alte und neue Wohnung.',
    icon: Sparkles,
    features: [
      'Grundreinigung',
      'Fensterreinigung',
      'Teppichreinigung',
      'Übergabegarantie',
      'Ökologische Reiniger'
    ],
    price: 'ab 25€/Std'
  }
]
</script>
