<template>
  <section id="about" class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Content -->
        <div class="space-y-8">
          <div class="space-y-4">
            <h2 class="text-3xl lg:text-4xl font-bold text-foreground">
              Ihr zuverlässiger Partner für Entrümpelung & Umzüge
            </h2>
            <p class="text-xl text-muted-foreground leading-relaxed">
              Fix & Frei Umzüge und Entrümpelung steht für zuverlässige und professionelle Entrümpelungsdienstleistungen in Stade & Umgebung.
            </p>
          </div>
          
          <div class="space-y-6">
            <p class="text-muted-foreground leading-relaxed">
              Unser erfahrenes Team sorgt dafür, dass Ihre Entrümpelung stressfrei und termingerecht abläuft.
              Wir bieten Ihnen einen Komplettservice von der Planung bis zur fachgerechten Entsorgung -
              alles aus einer Hand und zu fairen Preisen.
            </p>
            
            <p class="text-muted-foreground leading-relaxed">
              Vertrauen Sie auf unsere langjährige Erfahrung und lassen Sie sich von unserem 
              professionellen Service überzeugen. Ihre Zufriedenheit ist unser Erfolg.
            </p>
          </div>
          
          <!-- Stats -->
          <div class="grid grid-cols-3 gap-8 pt-8">
            <div class="text-center">
              <div class="text-3xl font-bold text-primary mb-2">1500+</div>
              <div class="text-sm text-muted-foreground">Erfolgreiche Entrümpelungen</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-primary mb-2">100%</div>
              <div class="text-sm text-muted-foreground">Einsatz</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-primary mb-2">100%</div>
              <div class="text-sm text-muted-foreground">Kundenzufriedenheit</div>
            </div>
          </div>
        </div>
        
        <!-- Image -->
        <div class="relative">
          <img 
            src="/team1.jpeg" 
            alt="Unser professionelles Team" 
            class="rounded-2xl shadow-2xl"
          />
          <div class="absolute -top-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
            <div class="text-center">
              <Award class="h-8 w-8 mx-auto mb-2" />
              <div class="font-bold">Zertifiziert</div>
              <div class="text-sm opacity-90">ISO 9001</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Award } from 'lucide-vue-next'
</script>