<template>
  <div class="min-h-screen bg-background">
    <!-- Navigation -->
    <NavHeader />

    <!-- Hero Section -->
    <HeroSection />

    <!-- Services Section -->
    <ServicesSection />

    <!-- About Section -->
    <AboutSection />

    <!-- Team Section -->
    <TeamSection />

    <!-- Testimonials Section -->
    <TestimonialsSection />

    <!-- Contact Section -->
    <ContactSection />

    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import NavHeader from '../components/NavHeader.vue'
import HeroSection from '../components/HeroSection.vue'
import ServicesSection from '../components/ServicesSection.vue'
import AboutSection from '../components/AboutSection.vue'
import TeamSection from '../components/TeamSection.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue'
import ContactSection from '../components/ContactSection.vue'
import FooterSection from '../components/FooterSection.vue'

useSeoMeta({
  title: 'Fix & Frei Umzüge und Entrümpelung - Professionelle Entrümpelung & Entsorgung',
  description: 'Professionelle Entrümpelung und Entsorgung in Stade & Umgebung. Von Wohnungsauflösung über Haushaltsauflösung bis hin zu Keller- und Dachbodenräumung.',
  ogTitle: 'Fix & Frei Umzüge und Entrümpelung - Ihr zuverlässiger Entrümpelungspartner',
  ogDescription: 'Professionelle Entrümpelung und Entsorgung in Stade & Umgebung. Haushaltsauflösung, Wohnungsräumung, Entsorgung und mehr.',
  ogImage: 'https://fix-und-frei.de/favicon.png',
  ogUrl: 'https://fix-und-frei.de',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Fix & Frei Umzüge und Entrümpelung - Professionelle Entrümpelung & Entsorgung',
  twitterDescription: 'Professionelle Entrümpelung und Entsorgung in Stade & Umgebung. Haushaltsauflösung, Wohnungsräumung, Entsorgung und mehr.',
  twitterImage: 'https://fix-und-frei.de/favicon.png',
})

useHead({
  htmlAttrs: {
    lang: 'de'
  },
  link: [
    {
      rel: 'canonical',
      href: 'https://fix-und-frei.de'
    }
  ]
})
</script>
