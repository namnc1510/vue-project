<template>
  <div class="home">
    <Header @open-menu="menuActive = true" />
    <MenuOverlay :is-active="menuActive" @close-menu="menuActive = false" />
    
    <section id="banner" class="major">
      <div class="inner">
        <header class="major">
          <h1>Hi, my name is Forty</h1>
        </header>
        <div class="content">
          <p>A responsive site template designed by HTML5 UP<br>
            and released under the Creative Commons.</p>
          <ul class="actions">
            <li>
              <a href="#gallery-section" class="btn next" @click.prevent="scrollToSection">
                <span>Get Started</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <div id="gallery-section">
      <GallerySection />
    </div>

    <LandingSection />
    <ContactForm />
    <Footer />
  </div>
</template>

<script setup>
import '@/assets/scss/main.scss'

import { ref } from 'vue'

import Header from '@/components/Header.vue'
import MenuOverlay from '@/components/MenuOverlay.vue'
import GallerySection from '@/components/GallerySection.vue'
import LandingSection from '@/components/LandingSection.vue'
import ContactForm from '@/components/ContactForm.vue'
import Footer from '@/components/Footer.vue'

const menuActive = ref(false)
const scrollToSection = () => {
  const gallerySection = document.getElementById('gallery-section')
  if (gallerySection) {
    gallerySection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}
</script>

<style scoped>
.home {
  background-color: #242943;
  min-height: 100vh;
  overflow-x: hidden ;
}

#banner {
  background-image: url('@/assets/img/banner.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  padding: 14em 0;
  text-align: center;
  color: white;
  position: relative;
}

#banner::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(36, 41, 67, 0.9);
}

#banner .inner {
  position: relative;
  z-index: 2;
}

#banner h1 {
  font-size: 60px;
  font-weight: 300;
  margin-bottom: 1rem;
}

#banner p {
  font-size: 18px;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.9);
}

.major-divider {
  width: 600px;
  height: 1px;
  background-color: white;
  margin: 30px auto;
  opacity: 0.3;
}

.actions {
  margin-top: 2rem;
}

#banner .btn {
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

#banner .btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

@media (max-width: 1024px) {
  #banner h1 {
    font-size: 48px;
  }
  
  
  #banner {
    padding: 10em 0;
  }
}

@media (max-width: 768px) {
  #banner h1 {
    font-size: 36px;
  }
  
  
  #banner {
    padding: 8em 0;
  }
}

@media (max-width: 480px) {
  #banner h1 {
    font-size: 28px;
  }
  
  #banner {
    padding: 6em 1em;
  }
  
  #banner p {
    font-size: 16px;
  }
}
</style>