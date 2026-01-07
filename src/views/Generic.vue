<template>
  <div>
    <MenuOverlay :is-active="menuActive" @close-menu="menuActive = false" />
    
    <Header @open-menu="menuActive = true" class="scrolled" />
    
    <div class="content">
      <h2>Generic</h2>
      <img src="@/assets/img/pic06.png" alt="">
      <div class="text-content">
        <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis
          dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet.
          Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia
          malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien
          risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu
          nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies
          condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem
          mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque
          aliquam maximus risus, vel sed vehicula.</p>
        <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet
          dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo
          mauris, consectetur id ipsum sit amet, fersapien risus, commodo eget turpis at, elementum convallis
          elit. Pellentesque enim turpis, hendrerit tristique lorem ipsum dolor.</p>
      </div>
    </div>

    <ContactForm />
    
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'

import MenuOverlay from '@/components/MenuOverlay.vue'
import Header from '@/components/Header.vue'
import ContactForm from '@/components/ContactForm.vue'
import Footer from '@/components/Footer.vue'

const menuActive = ref(false)
</script>

<style scoped lang="scss">
@use '@/assets/scss/variables' as variables;

.content {
  width: 100%;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  background-color: variables.$primary-color;
  color: variables.$white;
  padding-left: 60px;
  padding-right: 60px;
  padding-top: 80px;
  gap: 80px;

  h2 {
    font-size: 35px;
  }

  img {
    max-width: 100%;
    height: auto;
  }
}

.text-content p {
  font-size: 15px;
  padding-bottom: 20px;
  color: variables.$text-color;
  margin: 0;
}

@media (max-width: variables.$breakpoint-lg) {
  .content {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 40px;
    gap: 30px;
    h2 {
      font-size: 22px;
    }
  }
  .text-content p {
    font-size: 13px;
  }
}
</style>