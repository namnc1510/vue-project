<template>
  <nav id="menu">
    <div class="menu-overlay" :class="{ active: isActive }" @click="closeMenu">
      <div class="menu-panel" @click.stop>
        <ul class="links">
          <li><router-link to="/" @click="closeMenu">Home</router-link></li>
          <li><router-link to="/landing" @click="closeMenu">Landing</router-link></li>
          <li><router-link to="/generic" @click="closeMenu">Generic</router-link></li>
        </ul>
        <ul class="actions stacked">
          <li><a href="#" class="button primary fit">Get Started</a></li>
          <li><a href="#" class="button fit">Log In</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  isActive: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close-menu'])

const closeMenu = () => {
  emit('close-menu')
}

const handleKeydown = (e) => {
  if (props.isActive && e.key === 'Escape') {
    closeMenu()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>


<style scoped lang="scss">
@use '@/assets/scss/variables' as variables;
.menu i {
  pointer-events: none;
}

.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0);
  z-index: 100000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s ease;

  &.active {
    background-color: rgba(0, 0, 0, 0.7);
    opacity: 1;
    visibility: visible;
  }
}

.menu-panel {
  position: fixed;
  top: 0;
  right: -400px;
  width: 400px;
  max-width: 90vw;
  height: 100vh;
  background-color: variables.$primary-color;
  padding: 3em 2em 2em;
  z-index: 10001;
  transition: right 0.4s ease 0.1s;
  overflow-y: auto;
  box-shadow: -5px 0 25px rgba(0, 0, 0, 0.3);
}

.menu-overlay.active .menu-panel {
  right: 0;
}

.menu-panel .links {
  list-style: none;
  margin-bottom: 2em;
  border-bottom: 1px solid variables.$border-color;
  padding-bottom: 1em;

  li {
    margin-bottom: 0.8em;
  }

  a {
    color: variables.$white;
    text-decoration: none;
    font-size: 18px;
    display: block;
    padding: 0.5em 0;
    transition: color 0.2s ease;

    &:hover {
      color: variables.$secondary-color;
    }
  }
}

.menu-panel .actions {
  list-style: none;

  li {
    margin-bottom: 1em;
  }
}

.menu-panel .button {
  display: block;
  width: 100%;
  padding: 0.9rem 1rem;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &.primary {
    background-color: variables.$secondary-color;
    color: variables.$white ;

    &:hover {
      background-color: #5ab3d0;
    }
  }

  &.fit {
    background-color: transparent;
    color: variables.$white;
    border: 2px solid variables.$white;

    &:hover {
      background-color: variables.$white;
      color: variables.$primary-color;
    }
  }
}

@media (max-width: variables.$breakpoint-md) {
  .menu-panel {
    width: 80vw;
    padding: 2em 1em 1em;
  }
}
</style>