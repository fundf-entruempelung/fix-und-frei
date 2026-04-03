<template>
  <div>
    <NavHeader />
    <main class="min-h-screen bg-background pt-24 pb-16">
      <div class="container mx-auto px-4 max-w-4xl">
        <h1 class="text-4xl font-bold mb-8 text-foreground">Impressum</h1>
        <div id="lc-text" class="legal-content"></div>
        <noscript>
          <p class="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg mt-8">
            Sie können diesen Rechtstext nicht sehen, weil Sie JavaScript deaktiviert haben.
            Folgen Sie bitte diesem
            <a target="_blank" class="text-primary underline" href="https://app.cockpit.legal/api/cockpit/resources/legaldocumentshare/6fd463cb9b38fc30778d1e1caa67307c/document/render/html?language=de">Link</a>,
            um den Rechtstext anzuzeigen.
          </p>
        </noscript>
      </div>
    </main>
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import NavHeader from '~/components/NavHeader.vue'
import FooterSection from '~/components/FooterSection.vue'

// SEO Meta Tags
useSeoMeta({
  title: 'Impressum - Fix & Frei Umzüge und Entrümpelung',
  description: 'Impressum und rechtliche Angaben von Fix & Frei Umzüge und Entrümpelung',
  ogTitle: 'Impressum - Fix & Frei Umzüge und Entrümpelung',
  ogDescription: 'Impressum und rechtliche Angaben von Fix & Frei Umzüge und Entrümpelung',
  ogImage: 'https://fix-und-frei.de/favicon.png',
  ogUrl: 'https://fix-und-frei.de/impressum',
  twitterCard: 'summary_large_image',
})

useHead({
  htmlAttrs: {
    lang: 'de'
  },
  link: [
    {
      rel: 'canonical',
      href: 'https://fix-und-frei.de/impressum'
    }
  ]
})

// Load legal document on client side
onMounted(() => {
  fetch('https://app.cockpit.legal/api/cockpit/resources/legaldocumentshare/6fd463cb9b38fc30778d1e1caa67307c/document/render/html?language=de')
    .then((result) => result.text())
    .then((content) => {
      const element = document.getElementById('lc-text')
      if (element) {
        element.innerHTML = content
      }
    })
    .catch((error) => {
      console.error('Error loading impressum:', error)
    })
})
</script>

<style scoped>
.legal-content :deep(h1) {
  @apply text-4xl font-bold text-foreground mb-6 mt-8;
}

.legal-content :deep(h2) {
  @apply text-3xl font-bold text-foreground mb-5 mt-8;
}

.legal-content :deep(h3) {
  @apply text-2xl font-semibold text-foreground mb-4 mt-6;
}

.legal-content :deep(h4) {
  @apply text-xl font-semibold text-foreground mb-3 mt-5;
}

.legal-content :deep(p) {
  @apply text-base text-foreground mb-4 leading-relaxed opacity-90;
}

.legal-content :deep(a) {
  @apply text-primary underline transition-colors;
}

.legal-content :deep(a:hover) {
  @apply opacity-80;
}

.legal-content :deep(ul),
.legal-content :deep(ol) {
  @apply mb-4 ml-6 space-y-2;
}

.legal-content :deep(li) {
  @apply text-base text-foreground leading-relaxed opacity-90;
}

.legal-content :deep(strong),
.legal-content :deep(b) {
  @apply font-semibold text-foreground;
}
</style>
