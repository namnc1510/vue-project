<template>
  <div>
    <MenuOverlay :is-active="menuActive" @close-menu="menuActive = false" />
    
    <Header @open-menu="menuActive = true" class="scrolled" />
    
    <Section @open-menu="menuActive = true" background-image="@/assets/img/pic02.png">
      <template #header>
        <h1>Landing</h1>
      </template>
      <template #content>
        <p>A responsive site template designed by HTML5 UPLorem ipsum dolor sit amet nullam consequat<br>
          sed veroeros. tempus adipiscing nulla.</p>
      </template>
    </Section>

    <div class="sed">
      <h2>Sed amet aliquam</h2>
      <p>
        Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In
        efficitur ligula tate urna. Maecenas massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu
        lorem consequat tincidunt. Vivamus et sagittis libero. Nullam et orci eu lorem consequat tincidunt vivamus
        et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna.
      </p>
    </div>

    <LandingSection />
    <ContactForm />
    
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'

import MenuOverlay from '@/components/MenuOverlay.vue'
import Header from '@/components/Header.vue'
import LandingSection from '@/components/LandingSection.vue'
import ContactForm from '@/components/ContactForm.vue'
import Footer from '@/components/Footer.vue'

const menuActive = ref(false)
</script>


<style scoped lang="scss">
@use '@/assets/scss/variables' as variables;

.sed {
  width: 100%;
  height: 400px;
  padding-left: 80px;
  padding-right: 80px;
  padding-top: 100px;
  background-color: variables.$primary-color;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  color: variables.$white;
  position: relative;
  z-index: 2;

  h2 {
    font-size: 35px;
    font-weight: 100;
    padding-bottom: 30px;
    font-weight: bold;
  }

  p {
    font-size: 15px;
    padding-bottom: 20px;
    line-height: 20px;
    font-weight: lighter;
  }
}

@media (max-width: variables.$breakpoint-lg) {
  .sed {
    height: auto;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 40px;
    h2 {
      font-size: 22px;
    }
    p {
      font-size: 13px;
    }
  }
}
</style>