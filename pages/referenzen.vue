<template>
  <div class="min-h-screen bg-gray-50">
    <NavHeader />
    <ReferenzenHero />
    <ReferenzenTestimonials />
    <ReferenzenProjects />
    <ContactSection />
    <FooterSection />
  </div>
</template>

<script setup>
import NavHeader from '../components/NavHeader.vue'
import ReferenzenHero from '../components/Referenzen/ReferenzenHero.vue'
import ReferenzenTestimonials from '../components/Referenzen/ReferenzenTestimonials.vue'
import ReferenzenProjects from '../components/Referenzen/ReferenzenProjects.vue'
import ContactSection from '../components/ContactSection.vue'
import FooterSection from '../components/FooterSection.vue'

useSeoMeta({
  title: 'Referenzen & Kundenstimmen - Fix & Frei Umzüge und Entrümpelung',
  description: 'Überzeugen Sie sich von unserer Qualität. Lesen Sie Erfahrungsberichte zufriedener Kunden und sehen Sie unsere erfolgreich abgeschlossenen Projekte.',
  ogTitle: 'Referenzen & Kundenstimmen - Fix & Frei Umzüge und Entrümpelung',
  ogDescription: 'Zufriedene Kunden, erfolgreiche Projekte. Lesen Sie authentische Erfahrungsberichte und überzeugen Sie sich von unserer Qualität.',
  ogImage: 'https://fix-und-frei.de/favicon.png',
  ogUrl: 'https://fix-und-frei.de/referenzen',
  twitterCard: 'summary_large_image',
})

useHead({
  htmlAttrs: {
    lang: 'de'
  },
  link: [
    {
      rel: 'canonical',
      href: 'https://fix-und-frei.de/referenzen'
    }
  ]
})
</script>
