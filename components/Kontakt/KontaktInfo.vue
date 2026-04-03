<template>
  <section class="bg-gradient-to-br from-brand-600 to-brand-700 text-white py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 class="text-4xl md:text-5xl font-bold mb-6 text-balance">
        Kontaktieren Sie uns
      </h1>
      <p class="text-xl md:text-2xl mb-8 text-brand-100 max-w-3xl mx-auto text-pretty">
        Wir sind für Sie da! Kontaktieren Sie uns für ein kostenloses Angebot oder bei Fragen zu unserem Service.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="tel:+4915213945134" class="bg-white text-brand-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
          <PhoneIcon class="h-5 w-5 mr-2" />
          Sofort anrufen
        </a>
        <a href="https://wa.me/4915213945134" target="_blank" rel="noopener noreferrer" class="bg-[#25D366] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#20BA5A] transition-colors flex items-center justify-center">
          <MessageCircle class="h-5 w-5 mr-2" />
          WhatsApp
        </a>
        <a href="mailto:kontakt@fix-und-frei.de" class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-brand-600 transition-colors flex items-center justify-center">
          <MailIcon class="h-5 w-5 mr-2" />
          E-Mail senden
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { PhoneIcon, MailIcon, MessageCircle } from 'lucide-vue-next'
</script>
