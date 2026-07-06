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

          <input type="hidden" name="gclid" v-model="form.gclid">

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
  datenschutz: false,
  gclid: ''
})

// Reads the gclid/gbraid/wbraid captured on landing (see nuxt.config.ts) so it can
// travel with the form submission for later offline conversion import.
function getStoredClickId() {
  try {
    const match = document.cookie.split('; ').find((row) => row.startsWith('ff_gclid='))
    const raw = match
      ? decodeURIComponent(match.split('=').slice(1).join('='))
      : window.localStorage.getItem('ff_gclid')

    if (!raw) return ''

    const stored = JSON.parse(raw)
    return stored.gclid || stored.gbraid || stored.wbraid || ''
  } catch (e) {
    return ''
  }
}

// Normalizes German phone numbers to E.164 (e.g. "0151 234..." -> "+49151234...")
// for Google Ads Enhanced Conversions.
function normalizePhoneToE164(raw) {
  if (!raw) return ''
  let digits = raw.trim().replace(/[^0-9+]/g, '')
  if (digits.startsWith('00')) digits = `+${digits.slice(2)}`
  if (digits.startsWith('+')) return digits
  if (digits.startsWith('0')) return `+49${digits.slice(1)}`
  if (digits.startsWith('49')) return `+${digits}`
  return digits ? `+49${digits}` : ''
}

// Pre-select service from query parameter
onMounted(() => {
  if (route.query.service) {
    form.service = route.query.service
  }

  form.gclid = getStoredClickId()
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

      <h3>Tracking:</h3>
      <p><strong>GCLID:</strong> ${form.gclid || 'Nicht vorhanden'}</p>
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

Tracking:
GCLID: ${form.gclid || 'Nicht vorhanden'}
    `.trim()

    // Use server API route to avoid CORS issues
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: {
        subject: subject,
        html: htmlBody,
        text: textBody,
        gclid: form.gclid
      }
    })

    if (response.success) {
      // Redirect to the thank you page. Guarded so it runs exactly once, whether
      // triggered by gtag's event_callback or the timeout fallback below.
      let redirected = false
      const goToDanke = () => {
        if (redirected) return
        redirected = true
        navigateTo('/danke')
      }

      // Fires the Google Ads conversion once, only on a real successful submission.
      // Calls the GLOBAL gtag directly (the gtag.js function configured for
      // AW-17898917853 in nuxt.config.ts) - NOT a dataLayer.push({event:'form_submit'})
      // and NOT any GTM-only event, since there is no GTM trigger for it. Independent
      // of consent (Consent Mode still sends a cookieless ping with the label).
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        // Enhanced Conversions: hand first-party contact data to gtag right before the
        // conversion event so it can be hashed client-side and matched by Google Ads.
        const userData = {}
        if (form.email) userData.email = form.email.trim().toLowerCase()
        const phone = normalizePhoneToE164(form.telefon)
        if (phone) userData.phone_number = phone

        if (Object.keys(userData).length) {
          window.gtag('set', 'user_data', userData)
        }

        // Event name MUST be 'conversion' and send_to MUST carry the full label
        // 'AW-17898917853/9gHBCJDD7-0bEN2f79ZC' so the "Formular Abgeschickt"
        // conversion counts. event_callback delays the redirect until the labeled
        // conversion request has been dispatched, so it is not lost to navigation.
        window.gtag('event', 'conversion', {
          send_to: 'AW-17898917853/9gHBCJDD7-0bEN2f79ZC',
          value: 1.0,
          currency: 'EUR',
          event_callback: goToDanke
        })

        // Confirms this code path is reached on a successful submission. If this line
        // does not appear in the console, the success callback itself is not running.
        console.log('[conversion] Formular Abgeschickt gesendet')

        // Fallback: navigate anyway if gtag never calls back (e.g. blocker/timeout).
        setTimeout(goToDanke, 1200)
      } else {
        goToDanke()
      }
    }
  } catch (error) {
    console.error('Error submitting form:', error)
    alert('Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.')
    isSubmitting.value = false
  }
}
</script>
