<template>
  <div class="min-h-screen flex items-center justify-center px-4 py-20">
    <div class="max-w-2xl mx-auto text-center">
      <!-- Logo & Company Name -->
      <div class="mb-8 flex justify-center items-center gap-2">
        <img src="/logo-fix.svg" alt="Fix & Frei Umzüge und Entrümpelung Logo" class="h-14 w-auto" />
        <img src="/logo-extension.svg" alt="Fix & Frei Umzüge und Entrümpelung" class="h-12 w-auto self-center" />
      </div>

      <!-- Success Icon -->
      <div class="mb-8 flex justify-center">
        <div class="bg-brand-100 dark:bg-brand-900/30 p-6 rounded-full">
          <CheckCircle class="h-20 w-20 text-brand-600 dark:text-brand-400" />
        </div>
      </div>

      <!-- Heading -->
      <h1 class="text-4xl md:text-5xl font-bold text-foreground mb-4">
        Vielen Dank für Ihre Anfrage!
      </h1>

      <!-- Description -->
      <p class="text-xl text-muted-foreground mb-8">
        Wir haben Ihre Nachricht erhalten und werden uns schnellstmöglich bei Ihnen melden.
        In der Regel antworten wir innerhalb von 24 Stunden.
      </p>

      <!-- Info Cards -->
      <div class="grid md:grid-cols-2 gap-6 mb-12 text-left">
        <div class="bg-card p-6 rounded-xl border border-border">
          <div class="flex items-start space-x-3">
            <Phone class="h-6 w-6 text-primary mt-1" />
            <div>
              <h3 class="font-semibold text-foreground mb-1">Dringende Anfragen?</h3>
              <p class="text-sm text-muted-foreground mb-2">Rufen Sie uns direkt an:</p>
              <a href="tel:+4915213945134" class="text-primary font-medium hover:underline">
                +49 1521 3945134
              </a>
            </div>
          </div>
        </div>

        <div class="bg-card p-6 rounded-xl border border-border">
          <div class="flex items-start space-x-3">
            <Mail class="h-6 w-6 text-primary mt-1" />
            <div>
              <h3 class="font-semibold text-foreground mb-1">E-Mail</h3>
              <p class="text-sm text-muted-foreground mb-2">Oder schreiben Sie uns:</p>
              <a href="mailto:kontakt@fix-und-frei.de" class="text-primary font-medium hover:underline">
                kontakt@fix-und-frei.de
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtLink
          to="/"
          class="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
        >
          <Home class="mr-2 h-5 w-5" />
          Zur Startseite
        </NuxtLink>

        <NuxtLink
          to="/leistungen"
          class="inline-flex items-center justify-center px-6 py-3 bg-card text-card-foreground border border-border rounded-lg font-semibold hover:bg-accent transition-colors"
        >
          <Briefcase class="mr-2 h-5 w-5" />
          Unsere Leistungen
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckCircle, Phone, Mail, Home, Briefcase } from 'lucide-vue-next'

useSeoMeta({
  title: 'Danke für Ihre Anfrage - Fix & Frei Umzüge und Entrümpelung',
  description: 'Vielen Dank für Ihre Kontaktaufnahme. Wir melden uns schnellstmöglich bei Ihnen.',
  ogTitle: 'Danke für Ihre Anfrage - Fix & Frei Umzüge und Entrümpelung',
  ogDescription: 'Vielen Dank für Ihre Kontaktaufnahme. Wir melden uns schnellstmöglich bei Ihnen.',
  ogImage: 'https://fix-und-frei.de/favicon.png',
  ogUrl: 'https://fix-und-frei.de/danke',
  twitterCard: 'summary_large_image',
  robots: 'noindex, nofollow' // Prevent indexing of thank you page
})

useHead({
  htmlAttrs: {
    lang: 'de'
  },
  link: [
    { rel: 'canonical', href: 'https://fix-und-frei.de/danke' }
  ]
})
</script>
