<template>
  <section class="py-20 bg-muted/30">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold text-foreground mb-4">
          Was unsere Kunden sagen
        </h2>
        <p class="text-xl text-muted-foreground">
          Über 1500 zufriedene Kunden vertrauen auf unseren Service
        </p>
      </div>
      
      <!-- Testimonials Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="testimonial in testimonials" :key="testimonial.name" class="bg-card p-8 rounded-xl shadow-lg border border-border">
          <!-- Stars -->
          <div class="flex mb-4">
            <Star v-for="i in 5" :key="i" class="h-5 w-5 text-yellow-400 fill-current" />
          </div>
          
          <!-- Quote -->
          <blockquote class="text-muted-foreground mb-6 leading-relaxed">
            "{{ testimonial.quote }}"
          </blockquote>
          
          <!-- Author -->
          <div class="flex items-center">
            <div class="bg-primary/10 rounded-full p-3 mr-4">
              <User class="h-6 w-6 text-primary" />
            </div>
            <div>
              <div class="font-semibold text-card-foreground">{{ testimonial.name }}</div>
              <div class="text-sm text-muted-foreground">{{ testimonial.location }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Star, User } from 'lucide-vue-next'

const testimonials = [
  {
    name: 'Familie Schmidt',
    location: 'Stade',
    quote: 'Absolut professioneller Service! Das Team war pünktlich, freundlich und sehr sorgfältig mit unseren Möbeln. Würden wir jederzeit wieder beauftragen.'
  },
  {
    name: 'Thomas Weber',
    location: 'Hamburg',
    quote: 'Unser Firmenumzug lief dank Fix & Frei Umzüge und Entrümpelung reibungslos ab. Minimale Ausfallzeiten und alles wurde termingerecht erledigt. Sehr empfehlenswert!'
  },
  {
    name: 'Maria Hoffmann',
    location: 'Buxtehude',
    quote: 'Besonders beeindruckt hat mich der Verpackungsservice. Alles kam unbeschädigt an. Das Preis-Leistungs-Verhältnis ist ausgezeichnet.'
  }
]
</script>