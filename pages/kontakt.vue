<template>
  <div class="min-h-screen bg-gray-50">
    <NavHeader />
    <KontaktHero />
    <KontaktForm />
    <FooterSection />
  </div>
</template>

<script setup>
import NavHeader from '../components/NavHeader.vue'
import KontaktHero from '../components/Kontakt/KontaktHero.vue'
import KontaktInfo from '../components/Kontakt/KontaktInfo.vue'
import KontaktForm from '../components/Kontakt/KontaktForm.vue'
import FooterSection from '../components/FooterSection.vue'

useSeoMeta({
  title: 'Kontakt - Fix & Frei Umzüge und Entrümpelung',
  description: 'Kontaktieren Sie uns für ein kostenloses und unverbindliches Angebot. Wir beraten Sie gerne persönlich zu Ihrem Umzug oder Ihrer Entrümpelung.',
  ogTitle: 'Kontakt - Fix & Frei Umzüge und Entrümpelung',
  ogDescription: 'Kostenloses Angebot anfordern. Rufen Sie uns an oder schreiben Sie uns - wir beraten Sie gerne!',
  ogImage: 'https://fix-und-frei.de/favicon.png',
  ogUrl: 'https://fix-und-frei.de/kontakt',
  twitterCard: 'summary_large_image',
})

useHead({
  htmlAttrs: {
    lang: 'de'
  },
  link: [
    {
      rel: 'canonical',
      href: 'https://fix-und-frei.de/kontakt'
    }
  ]
})
</script>
