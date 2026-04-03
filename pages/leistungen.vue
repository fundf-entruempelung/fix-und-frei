<template>
  <div>
    <NavHeader />
    <LeistungenHero />
    <LeistungenDetails />
    <ContactSection />
    <FooterSection />
  </div>
</template>

<script setup>
import LeistungenHero from '../components/Leistungen/LeistungenHero.vue'
import LeistungenDetails from '../components/Leistungen/LeistungenDetails.vue'
import ContactSection from '../components/ContactSection.vue'
import NavHeader from '../components/NavHeader.vue'
import FooterSection from '../components/FooterSection.vue'

useSeoMeta({
  title: 'Unsere Leistungen - Fix & Frei Umzüge und Entrümpelung',
  description: 'Entrümpelung, Umzüge, Firmen- und Haushaltsauflösung, Wohnungsauflösung, Entsorgung und Transport. Professionelle Dienstleistungen für jeden Bedarf.',
  ogTitle: 'Unsere Leistungen - Fix & Frei Umzüge und Entrümpelung',
  ogDescription: 'Komplettservice: Entrümpelung, Umzüge, Haushaltsauflösung, Entsorgung und Transport. Professionell und zuverlässig in Stade & Umgebung.',
  ogImage: 'https://fix-und-frei.de/favicon.png',
  ogUrl: 'https://fix-und-frei.de/leistungen',
  twitterCard: 'summary_large_image',
})

useHead({
  htmlAttrs: {
    lang: 'de'
  },
  link: [
    {
      rel: 'canonical',
      href: 'https://fix-und-frei.de/leistungen'
    }
  ]
})
</script>
