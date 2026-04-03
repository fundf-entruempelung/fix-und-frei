<template>
  <div class="min-h-screen bg-white">
    <NavHeader />
    <UeberUnsHero />
    <UeberUnsStory />
    <UeberUnsValues />
    <UeberUnsCertifications />
    <ContactSection />
    <FooterSection />
  </div>
</template>

<script setup>
import NavHeader from '../components/NavHeader.vue'
import UeberUnsHero from '../components/Ueber-uns/UeberUnsHero.vue'
import UeberUnsStory from '../components/Ueber-uns/UeberUnsStory.vue'
import UeberUnsValues from '../components/Ueber-uns/UeberUnsValues.vue'
import UeberUnsCertifications from '../components/Ueber-uns/UeberUnsCertifications.vue'
import ContactSection from '../components/ContactSection.vue'
import FooterSection from '../components/FooterSection.vue'

useSeoMeta({
  title: 'Über uns - Fix & Frei Umzüge und Entrümpelung',
  description: 'Erfahren Sie mehr über unsere Werte, Qualitätsstandards und warum wir Ihr vertrauenswürdiger Partner für professionelle Entrümpelung und Entsorgung sind.',
  ogTitle: 'Über uns - Fix & Frei Umzüge und Entrümpelung',
  ogDescription: 'Professionelle Entrümpelung mit langjähriger Erfahrung. Ihr vertrauenswürdiger Partner für Entrümpelung, Haushaltsauflösung und mehr.',
  ogImage: 'https://fix-und-frei.de/favicon.png',
  ogUrl: 'https://fix-und-frei.de/ueber-uns',
  twitterCard: 'summary_large_image',
})

useHead({
  htmlAttrs: {
    lang: 'de'
  },
  link: [
    {
      rel: 'canonical',
      href: 'https://fix-und-frei.de/ueber-uns'
    }
  ]
})
</script>
