<template>
  <section id="home" class="relative py-20 lg:py-32 overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img
        src="/team.jpeg"
        alt="Fix & Frei Umzüge und Entrümpelung"
        class="w-full h-full object-cover"
      />
      <!-- Dark Overlay -->
      <div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div class="space-y-8">
          <div class="space-y-4">
            <h1 class="text-4xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
              Ihr Partner für <br>
              <span class="text-primary">Umzüge</span> & <span class="text-primary">Entrümpelung</span>
            </h1>
            <p class="text-xl text-white/90 leading-relaxed drop-shadow-md">
              Professionelle Umzüge und Entrümpelung in Stade & Umgebung.
              Schnell, zuverlässig und stressfrei – mit Sorgfalt und Erfahrung.
            </p>
          </div>

          <!-- CTA Button -->
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="tel:+4915213945134" class="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center shadow-xl">
              <Phone class="mr-2 h-5 w-5" />
              Kostenlos anfragen
            </a>
            <a href="https://wa.me/4915213945134" target="_blank" rel="noopener noreferrer" class="bg-[#25D366] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#20BA5A] transition-colors flex items-center justify-center shadow-xl">
              <MessageCircle class="mr-2 h-5 w-5" />
              WhatsApp
            </a>
          </div>

          <!-- Trust Indicators -->
          <div class="flex items-center space-x-8 pt-8">
            <div class="flex items-center">
              <Shield class="h-6 w-6 text-primary mr-2 drop-shadow-md" />
              <span class="text-sm text-white/90 font-medium">Vollversichert</span>
            </div>
            <div class="flex items-center">
              <Clock class="h-6 w-6 text-primary mr-2 drop-shadow-md" />
              <span class="text-sm text-white/90 font-medium">24/7 Service</span>
            </div>
            <div class="flex items-center">
              <Star class="h-6 w-6 text-primary mr-2 drop-shadow-md" />
              <span class="text-sm text-white/90 font-medium">Top Qualität</span>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-card rounded-2xl shadow-xl p-8 border border-border">
          <h3 class="text-2xl font-bold text-card-foreground mb-6">Schnellanfrage</h3>
          <form @submit.prevent="submitForm" class="space-y-4">
            <div>
              <label for="name" class="block text-sm font-medium text-card-foreground mb-2">Name *</label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                required
                class="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-background text-foreground"
                placeholder="Ihr Name"
              >
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-card-foreground mb-2">E-Mail *</label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                required
                class="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-background text-foreground"
                placeholder="ihre.email@beispiel.de"
              >
            </div>

            <div>
              <label for="phone" class="block text-sm font-medium text-card-foreground mb-2">Telefon *</label>
              <input
                type="tel"
                id="phone"
                v-model="form.phone"
                required
                class="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-background text-foreground"
                placeholder="+49 151 234 567 89"
              >
            </div>

            <div>
              <label for="service" class="block text-sm font-medium text-card-foreground mb-2">Serviceart *</label>
              <select
                id="service"
                v-model="form.service"
                required
                class="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-background text-foreground"
              >
                <option value="">Bitte wählen Sie einen Service</option>
                <option value="Umzüge">Umzüge</option>
                <option value="Entrümpelung">Entrümpelung</option>
                <option value="Firmenumzug">Firmenumzug</option>
                <option value="Haushaltsauflösung">Haushaltsauflösung</option>
                <option value="Wohnungsauflösung">Wohnungsauflösung</option>
                <option value="Entsorgung">Entsorgung</option>
                <option value="Transport">Transport</option>
                <option value="Sonstiges">Sonstiges</option>
              </select>
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-card-foreground mb-2">Nachricht</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="3"
                class="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-background text-foreground"
                placeholder="Beschreiben Sie kurz Ihr Anliegen..."
              ></textarea>
            </div>

            <div class="flex items-start">
              <input
                type="checkbox"
                id="datenschutz-hero"
                v-model="form.datenschutz"
                required
                class="mt-1 h-4 w-4 text-primary focus:ring-primary border-border rounded bg-background"
              >
              <label for="datenschutz-hero" class="ml-3 text-sm text-card-foreground">
                Ich stimme der Verarbeitung meiner Daten gemäß der
                <NuxtLink to="/datenschutz" target="_blank" class="text-primary hover:text-primary/80 underline">Datenschutzerklärung</NuxtLink> zu. *
              </label>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              <Send class="mr-2 h-5 w-5" />
              {{ isSubmitting ? 'Wird gesendet...' : 'Anfrage senden' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Phone, Shield, Clock, Star, Send, MessageCircle } from 'lucide-vue-next'

const form = ref({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
  datenschutz: false
})

const isSubmitting = ref(false)

const submitForm = async () => {
  isSubmitting.value = true

  try {
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: {
        subject: 'Neue Schnellanfrage von der Website',
        html: `
          <h2>Neue Schnellanfrage von Fix & Frei Umzüge und Entrümpelung Website</h2>
          <p><strong>Name:</strong> ${form.value.name}</p>
          <p><strong>E-Mail:</strong> ${form.value.email}</p>
          <p><strong>Telefon:</strong> ${form.value.phone}</p>
          <p><strong>Serviceart:</strong> ${form.value.service}</p>
          <p><strong>Nachricht:</strong></p>
          <p>${form.value.message || 'Keine Nachricht angegeben'}</p>
        `,
        text: `
Neue Schnellanfrage von Fix & Frei Umzüge und Entrümpelung Website

Name: ${form.value.name}
E-Mail: ${form.value.email}
Telefon: ${form.value.phone}
Serviceart: ${form.value.service}
Nachricht: ${form.value.message || 'Keine Nachricht angegeben'}
        `
      }
    })

    if (response.success) {
      // Reset form
      form.value = {
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        datenschutz: false
      }

      // Redirect to thank you page
      await navigateTo('/danke')
    }
  } catch (error) {
    console.error('Form submission error:', error)
    alert('Es gab einen Fehler beim Senden Ihrer Anfrage. Bitte versuchen Sie es erneut oder rufen Sie uns direkt an.')
  } finally {
    isSubmitting.value = false
  }
}
</script>

