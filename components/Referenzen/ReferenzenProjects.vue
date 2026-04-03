<template>
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">
        Erfolgreiche Projekte
      </h2>
      
      <div class="grid md:grid-cols-2 gap-8">
        <div v-for="project in projects" :key="project.id" 
             class="bg-white rounded-lg shadow-sm overflow-hidden">
          <div class="h-48 bg-gradient-to-br from-brand-100 to-blue-100 flex items-center justify-center">
            <component :is="project.icon" class="h-16 w-16 text-brand-600" />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 mb-4">{{ project.description }}</p>
            <div class="flex items-center justify-between text-sm text-gray-500">
              <span>{{ project.location }}</span>
              <span>{{ project.date }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { HomeIcon, BuildingIcon, TruckIcon, PackageIcon } from 'lucide-vue-next'

const projects = [
  {
    id: 1,
    title: "Familienumzug Hamburg-Stade",
    description: "Kompletter Haushaltsumzug einer 5-köpfigen Familie mit Verpackungsservice und Möbelmontage.",
    location: "Hamburg → Stade",
    date: "März 2025",
    icon: HomeIcon
  },
  {
    id: 2,
    title: "Büroumzug in Stade",
    description: "Umzug eines Unternehmens mit 20 Arbeitsplätzen inklusive IT-Equipment und Möbelmontage.",
    location: "Stade Innenstadt",
    date: "Februar 2025",
    icon: BuildingIcon
  },
  {
    id: 3,
    title: "Entrümpelung Dachboden",
    description: "Komplette Dachbodenentrümpelung mit fachgerechter Entsorgung und besenreiner Übergabe.",
    location: "Buxtehude",
    date: "Januar 2025",
    icon: TruckIcon
  },
  {
    id: 4,
    title: "Seniorenumzug mit Betreuung",
    description: "Einfühlsamer Umzug für Senioren mit kompletter Betreuung und Einrichtungsservice.",
    location: "Cuxhaven → Stade",
    date: "Dezember 2025",
    icon: PackageIcon
  }
]
</script>
