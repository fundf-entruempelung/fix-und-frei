<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="space-y-24">
        <!-- Entrümpelung -->
        <div id="entruempelung" class="scroll-mt-[200px] pb-20">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div class="order-2 lg:order-1">
              <div class="inline-block bg-brand-100 text-brand-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Professionelle Entrümpelung
              </div>
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Entrümpelung
              </h2>
              <p class="text-lg text-gray-600 mb-6">
                Wir kümmern uns um die komplette Entrümpelung Ihrer Immobilie. 
                Ob Keller, Dachboden, Garage oder komplette Wohnungen - 
                wir räumen alles fachgerecht und zuverlässig.
              </p>
              <ul class="space-y-4 mb-8">
                <li class="flex items-start">
                  <CheckCircle class="h-6 w-6 text-brand-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span class="text-gray-700">Keller- und Dachbodenräumung</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle class="h-6 w-6 text-brand-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span class="text-gray-700">Garagen- und Schuppenräumung</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle class="h-6 w-6 text-brand-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span class="text-gray-700">Gewerberäume entrümpeln</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle class="h-6 w-6 text-brand-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span class="text-gray-700">Messie-Wohnungen</span>
                </li>
              </ul>
              <a href="#contact" @click="selectService('Entrümpelung')" class="inline-flex items-center bg-[#2f7ebd] text-white px-6 py-3 rounded-lg hover:bg-brand-700 transition-colors">
                Jetzt anfragen
                <ArrowRight class="ml-2 h-5 w-5" />
              </a>
            </div>
            <div class="order-1 lg:order-2">
              <div class="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/entruempelung.jpg"
                  alt="Entrümpelung Service"
                  class="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Umzüge -->
        <div id="umzuege" class="scroll-mt-[200px] py-20">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div class="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/umzuge.jpg"
                  alt="Umzüge Service"
                  class="w-full h-[400px] object-cover"
                />
              </div>
            </div>
            <div>
              <div class="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Stressfrei umziehen
              </div>
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Umzüge
              </h2>
              <p class="text-lg text-gray-600 mb-6">
                Ihr professioneller Partner für private Umzüge. Wir machen Ihren Umzug
                zum stressfreien Erlebnis - mit erfahrenem Team, modernen Fahrzeugen
                und umfassendem Service.
              </p>
              <ul class="space-y-4 mb-8">
                <li class="flex items-start">
                  <CheckCircle class="h-6 w-6 text-brand-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span class="text-gray-700">Privatumzüge jeder Größe</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle class="h-6 w-6 text-brand-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span class="text-gray-700">Umzüge in Stade & Umgebung</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle class="h-6 w-6 text-brand-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span class="text-gray-700">Seniorenumzüge mit Betreuung</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle class="h-6 w-6 text-brand-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span class="text-gray-700">Komplettservice mit Packhilfe</span>
                </li>
              </ul>
              <a href="#contact" @click="selectService('Umzüge')" class="inline-flex items-center bg-[#2f7ebd] text-white px-6 py-3 rounded-lg hover:bg-brand-700 transition-colors">
                Jetzt anfragen
                <ArrowRight class="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <!-- Firmenumzug -->
        <div id="firmenumzug" class="scroll-mt-[200px] py-20">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div class="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop" 
                  alt="Firmenumzug Service"
                  class="w-full h-[400px] object-cover"
                />
              </div>
            </div>
            <div>
              <div class="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Business Umzug
              </div>
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Firmenumzug
              </h2>
              <p class="text-lg text-gray-600 mb-6">
                Minimale Ausfallzeiten für Ihr Unternehmen. Wir planen und realisieren 
                Ihren Firmenumzug effizient und professionell - auch außerhalb der 
                Geschäftszeiten oder am Wochenende.
              </p>
              <ul class="space-y-4 mb-8">
                <li class="flex items-start">
                  <CheckCircle class="h-6 w-6 text-brand-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span class="text-gray-700">Büroumzüge jeder Größe</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle class="h-6 w-6 text-brand-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span class="text-gray-700">IT-Umzug und Serverumzug</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle class="h-6 w-6 text-brand-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span class="text-gray-700">Möbelmontage und -demontage</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle class="h-6 w-6 text-brand-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span class="text-gray-700">Flexible Terminplanung</span>
                </li>
              </ul>
              <a href="#contact" @click="selectService('Firmenumzug')" class="inline-flex items-center bg-[#2f7ebd] text-white px-6 py-3 rounded-lg hover:bg-brand-700 transition-colors">
                Jetzt anfragen
                <ArrowRight class="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <!-- Haushaltsauflösung -->
        <div id="haushaltsaufloesung" class="scroll-mt-[200px] py-20">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div class="order-2 lg:order-1">
              <div class="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Komplettservice
              </div>
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Haushaltsauflösung
              </h2>
              <p class="text-lg text-gray-600 mb-6">
                Wir übernehmen die komplette Haushaltsauflösung für Sie. 
                Diskret, respektvoll und professionell - ob nach einem Todesfall, 
                bei Umzug ins Pflegeheim oder aus anderen Gründen.
              </p>
              <ul class="space-y-4 mb-8">
                <li class="flex items-start">
                  <CheckCircle class="h-6 w-6 text-brand-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span class="text-gray-700">Komplette Wohnungsräumung</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle class="h-6 w-6 text-brand-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span class="text-gray-700">Wertgegenständeverwertung</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle class="h-6 w-6 text-brand-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span class="text-gray-700">Besenreine Übergabe</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle class="h-6 w-6 text-brand-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span class="text-gray-700">Diskrete Abwicklung</span>
                </li>
              </ul>
              <a href="#contact" @click="selectService('Haushaltsauflösung')" class="inline-flex items-center bg-[#2f7ebd] text-white px-6 py-3 rounded-lg hover:bg-brand-700 transition-colors">
                Jetzt anfragen
                <ArrowRight class="ml-2 h-5 w-5" />
              </a>
            </div>
            <div class="order-1 lg:order-2">
              <div class="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&auto=format&fit=crop"
                  alt="Haushaltsauflösung Service"
                  class="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Wohnungsauflösung -->
        <div id="wohnungsaufloesung" class="scroll-mt-[200px] py-20">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div class="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop" 
                  alt="Wohnungsauflösung Service"
                  class="w-full h-[400px] object-cover"
                />
              </div>
            </div>
            <div>
              <div class="inline-block bg-brand-100 text-brand-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Schnell & Zuverlässig
              </div>
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Wohnungsauflösung
              </h2>
              <p class="text-lg text-gray-600 mb-6">
                Professionelle Wohnungsauflösung zu fairen Preisen. 
                Wir kümmern uns um alles - von der Planung bis zur besenreinen Übergabe.
              </p>
              <ul class="space-y-4 mb-8">
                <li class="flex items-start">
                  <CheckCircle class="h-6 w-6 text-brand-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span class="text-gray-700">Schnelle Terminvergabe</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle class="h-6 w-6 text-brand-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span class="text-gray-700">Fachgerechte Entsorgung</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle class="h-6 w-6 text-brand-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span class="text-gray-700">Faire Preisgestaltung</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle class="h-6 w-6 text-brand-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span class="text-gray-700">Komplettservice möglich</span>
                </li>
              </ul>
              <a href="#contact" @click="selectService('Wohnungsauflösung')" class="inline-flex items-center bg-[#2f7ebd] text-white px-6 py-3 rounded-lg hover:bg-brand-700 transition-colors">
                Jetzt anfragen
                <ArrowRight class="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <!-- Entsorgung -->
        <div id="entsorgung" class="scroll-mt-[200px] py-20">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div class="order-2 lg:order-1">
              <div class="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Umweltgerecht
              </div>
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Entsorgung
              </h2>
              <p class="text-lg text-gray-600 mb-6">
                Fachgerechte und umweltbewusste Entsorgung aller Art. 
                Wir kümmern uns um die korrekte Trennung und Entsorgung 
                Ihrer Gegenstände gemäß gesetzlicher Vorschriften.
              </p>
              <ul class="space-y-4 mb-8">
                <li class="flex items-start">
                  <CheckCircle class="h-6 w-6 text-brand-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span class="text-gray-700">Sperrmüllentsorgung</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle class="h-6 w-6 text-brand-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span class="text-gray-700">Elektroschrott-Recycling</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle class="h-6 w-6 text-brand-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span class="text-gray-700">Sondermüll-Entsorgung</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle class="h-6 w-6 text-brand-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span class="text-gray-700">Umweltgerechtes Recycling</span>
                </li>
              </ul>
              <a href="#contact" @click="selectService('Entsorgung')" class="inline-flex items-center bg-[#2f7ebd] text-white px-6 py-3 rounded-lg hover:bg-brand-700 transition-colors">
                Jetzt anfragen
                <ArrowRight class="ml-2 h-5 w-5" />
              </a>
            </div>
            <div class="order-1 lg:order-2">
              <div class="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&auto=format&fit=crop"
                  alt="Entsorgung Service"
                  class="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Transport -->
        <div id="transport" class="scroll-mt-[200px] py-20">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div class="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop" 
                  alt="Transport Service"
                  class="w-full h-[400px] object-cover"
                />
              </div>
            </div>
            <div>
              <div class="inline-block bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Flexibel
              </div>
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Transport
              </h2>
              <p class="text-lg text-gray-600 mb-6">
                Zuverlässiger Transportservice für alle Anforderungen. 
                Ob Einzelstücke oder komplette Ladungen - wir transportieren 
                Ihre Güter sicher ans Ziel.
              </p>
              <ul class="space-y-4 mb-8">
                <li class="flex items-start">
                  <CheckCircle class="h-6 w-6 text-brand-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span class="text-gray-700">Möbeltransport</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle class="h-6 w-6 text-brand-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span class="text-gray-700">Kurierdienst</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle class="h-6 w-6 text-brand-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span class="text-gray-700">Stade & Umgebung</span>
                </li>
                <li class="flex items-start">
                  <CheckCircle class="h-6 w-6 text-brand-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span class="text-gray-700">Versicherte Transporte</span>
                </li>
              </ul>
              <a href="#contact" @click="selectService('Transport')" class="inline-flex items-center bg-[#2f7ebd] text-white px-6 py-3 rounded-lg hover:bg-brand-700 transition-colors">
                Jetzt anfragen
                <ArrowRight class="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { CheckCircle, ArrowRight } from 'lucide-vue-next'

const { setSelectedService } = useSelectedService()

const selectService = (service) => {
  setSelectedService(service)
}
</script>
