[file name]: Header.vue
<template>
  <header 
    id="header" 
    :class="{ scrolled: isScrolled }"
    :style="{ backgroundColor: isScrolled ? '#242943' : 'transparent' }"
  >
    <router-link to="/" class="logo">
      <strong>Forty</strong> <span>by HTML5 UP</span>
    </router-link>

    <nav>
      <a href="#" @click.prevent="emit('open-menu')">
        Menu <i class="fa-solid fa-bars"></i>
      </a>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const emit = defineEmits(['open-menu'])
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped lang="scss">
@use '@/assets/scss/variables' as variables;
#header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2em;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  z-index: 10;

  a {
    text-decoration: none;
    color: white;
    font-size: 20px;
    transition: color 0.3s ease;
  }

  .logo {
    strong {
      font-size: 25px;
      font-weight: 900;
    }
    span {
      font-size: 0.8em;
      opacity: 0.8;
    }
  }

  &.scrolled {
    background-color: variables.$primary-color !important;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
    position: fixed;
    z-index: 10000;
    a {
      color: white;
    }
  }

  &:not(.scrolled) {
    background-color: $primary-color;
    a {
      color: rgba(255, 255, 255, 0.9);
    }
    .logo span {
      color: rgba(255, 255, 255, 0.7);
    }
  }
}

@media (max-width: variables.$breakpoint-lg) {
  #header {
    height: 3.5em;
    padding: 0 1em;
    a {
      font-size: 18px;
    }
    .logo strong {
      font-size: 22px;
    }
  }
}
</style>