<template>
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">
        Was unsere Kunden sagen
      </h2>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="testimonial in testimonials" :key="testimonial.id" 
             class="bg-gray-50 p-6 rounded-lg shadow-sm">
          <div class="flex items-center mb-4">
            <div class="flex text-yellow-400">
              <StarIcon v-for="i in 5" :key="i" class="h-5 w-5 fill-current" />
            </div>
          </div>
          <p class="text-gray-700 mb-4 italic">"{{ testimonial.text }}"</p>
          <div class="flex items-center">
            <div class="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center mr-3">
              <UserIcon class="h-6 w-6 text-brand-600" />
            </div>
            <div>
              <div class="font-semibold text-gray-900">{{ testimonial.name }}</div>
              <div class="text-sm text-gray-600">{{ testimonial.location }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { StarIcon, UserIcon } from 'lucide-vue-next'

const testimonials = [
  {
    id: 1,
    name: "Familie Schmidt",
    location: "Stade",
    text: "Sehr professioneller Service! Das Team war pünktlich, freundlich und hat unseren Umzug perfekt organisiert. Absolut empfehlenswert!"
  },
  {
    id: 2,
    name: "Thomas Müller",
    location: "Buxtehude",
    text: "Faire Preise und zuverlässige Arbeit. Unser Büroumzug wurde termingerecht und ohne Schäden durchgeführt. Vielen Dank!"
  },
  {
    id: 3,
    name: "Maria Gonzalez",
    location: "Hamburg",
    text: "Hervorragender Kundenservice! Von der Beratung bis zur Durchführung war alles top organisiert. Gerne wieder!"
  },
  {
    id: 4,
    name: "Familie Weber",
    location: "Cuxhaven",
    text: "Schnell, sauber und professionell. Das Team hat sogar beim Aufbau der Möbel geholfen. Sehr zufrieden!"
  },
  {
    id: 5,
    name: "Dr. Andreas Klein",
    location: "Bremervörde",
    text: "Pünktlich, zuverlässig und sehr sorgfältig im Umgang mit unseren Sachen. Kann ich nur weiterempfehlen!"
  },
  {
    id: 6,
    name: "Familie Hansen",
    location: "Lüneburg",
    text: "Trotz kurzfristiger Anfrage haben sie unseren Umzug perfekt organisiert. Sehr flexibel und kundenorientiert!"
  }
]
</script>
