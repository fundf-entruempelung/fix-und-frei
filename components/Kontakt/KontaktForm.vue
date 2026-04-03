<template>
  <section class="py-16 bg-gray-50">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Kostenloses Angebot anfordern</h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
          Füllen Sie das Formular aus und erhalten Sie innerhalb von 24 Stunden ein unverbindliches Angebot für Ihren Umzug.
        </p>
      </div>

      <div class="bg-white rounded-lg shadow-lg p-8">
        <form @submit.prevent="submitForm" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="vorname" class="block text-sm font-medium text-gray-700 mb-2">Vorname *</label>
              <input 
                type="text" 
                id="vorname" 
                v-model="form.vorname"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                placeholder="Ihr Vorname"
              >
            </div>
            <div>
              <label for="nachname" class="block text-sm font-medium text-gray-700 mb-2">Nachname *</label>
              <input 
                type="text" 
                id="nachname" 
                v-model="form.nachname"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                placeholder="Ihr Nachname"
              >
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">E-Mail *</label>
              <input 
                type="email" 
                id="email" 
                v-model="form.email"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                placeholder="ihre.email@beispiel.de"
              >
            </div>
            <div>
              <label for="telefon" class="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
              <input 
                type="tel" 
                id="telefon" 
                v-model="form.telefon"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                placeholder="+49 151 234 567 89"
              >
            </div>
          </div>

          <div>
            <label for="service" class="block text-sm font-medium text-gray-700 mb-2">Serviceart *</label>
            <select
              id="service"
              v-model="form.service"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
            >
              <option value="">Bitte wählen Sie einen Service</option>
              <option value="Entrümpelung">Entrümpelung</option>
              <option value="Umzüge">Umzüge</option>
              <option value="Firmenumzug">Firmenumzug</option>
              <option value="Haushaltsauflösung">Haushaltsauflösung</option>
              <option value="Wohnungsauflösung">Wohnungsauflösung</option>
              <option value="Entsorgung">Entsorgung</option>
              <option value="Transport">Transport</option>
            </select>
          </div>

          <div>
            <label for="nachricht" class="block text-sm font-medium text-gray-700 mb-2">Zusätzliche Informationen</label>
            <textarea 
              id="nachricht" 
              v-model="form.nachricht"
              rows="4"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
              placeholder="Besondere Wünsche, schwere Gegenstände, Klaviertransport, etc."
            ></textarea>
          </div>

          <div class="flex items-start">
            <input 
              type="checkbox" 
              id="datenschutz" 
              v-model="form.datenschutz"
              required
              class="mt-1 h-4 w-4 text-brand-600 focus:ring-brand-500 border-gray-300 rounded"
            >
            <label for="datenschutz" class="ml-3 text-sm text-gray-600">
              Ich stimme der Verarbeitung meiner Daten gemäß der
              <NuxtLink to="/datenschutz" target="_blank" class="text-brand-600 hover:text-brand-700 underline">Datenschutzerklärung</NuxtLink> zu. *
            </label>
          </div>

          <div class="text-center">
            <button 
              type="submit"
              :disabled="isSubmitting"
              class="bg-[#2f7ebd] text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mx-auto"
            >
              <SendIcon v-if="!isSubmitting" class="h-5 w-5 mr-2" />
              <div v-else class="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              {{ isSubmitting ? 'Wird gesendet...' : 'Kostenloses Angebot anfordern' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { SendIcon } from 'lucide-vue-next'
import { useRoute } from 'vue-router'

const route = useRoute()
const isSubmitting = ref(false)

const form = reactive({
  vorname: '',
  nachname: '',
  email: '',
  telefon: '',
  service: '',
  nachricht: '',
  datenschutz: false
})

// Pre-select service from query parameter
onMounted(() => {
  if (route.query.service) {
    form.service = route.query.service
  }
})

const submitForm = async () => {
  isSubmitting.value = true

  try {
    const subject = `Angebot Anfrage: ${form.service} - ${form.vorname} ${form.nachname}`

    const htmlBody = `
      <h2>Neue Anfrage von Fix & Frei Umzüge und Entrümpelung Website</h2>
      <h3>Kontaktdaten:</h3>
      <p><strong>Name:</strong> ${form.vorname} ${form.nachname}</p>
      <p><strong>E-Mail:</strong> ${form.email}</p>
      <p><strong>Telefon:</strong> ${form.telefon || 'Nicht angegeben'}</p>

      <h3>Servicedetails:</h3>
      <p><strong>Serviceart:</strong> ${form.service}</p>

      <h3>Zusätzliche Informationen:</h3>
      <p>${form.nachricht || 'Keine zusätzlichen Informationen'}</p>
    `

    const textBody = `
Neue Anfrage von Fix & Frei Umzüge und Entrümpelung Website

Kontaktdaten:
Name: ${form.vorname} ${form.nachname}
E-Mail: ${form.email}
Telefon: ${form.telefon || 'Nicht angegeben'}

Servicedetails:
Serviceart: ${form.service}

Zusätzliche Informationen:
${form.nachricht || 'Keine zusätzlichen Informationen'}
    `.trim()

    // Use server API route to avoid CORS issues
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: {
        subject: subject,
        html: htmlBody,
        text: textBody
      }
    })

    if (response.success) {
      // Redirect to thank you page
      await navigateTo('/danke')
    }
  } catch (error) {
    console.error('Error submitting form:', error)
    alert('Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.')
    isSubmitting.value = false
  }
}
</script>
