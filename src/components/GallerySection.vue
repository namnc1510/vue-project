<template>
  <div class="gallery-section">
    <section id="one" class="section">
      <div class="gallery-item aliquam w-40" @click="openTab">
        <h2>Aliquam</h2>
        <p>IPSUM DOLOR SIT AMET</p>
      </div>
      <div class="gallery-item tempus w-60" @click="openTab">
        <h2>Tempus</h2>
        <p>FEUGIAT AMENT TEMPUS</p>
      </div>
    </section>

    <section id="two" class="section">
      <div class="gallery-item magna w-60" @click="openTab">
        <h2>Magna</h2>
        <p>LOREM ETIAM NULLAM</p>
      </div>
      <div class="gallery-item ipsum w-40" @click.once="openTab">
        <h2>Ipsum</h2>
        <p>NISL SED ALIQUAN</p>
      </div>
    </section>

    <section id="three" class="section">
      <div class="gallery-item consequat w-40" @click="openTab">
        <h2>Consequat</h2>
        <p>IPSUM DOLOR SIT AMENT</p>
      </div>
      <div class="gallery-item etiam w-60" @click="openTab">
        <h2>Etiam</h2>
        <p>FEUGIAT AMET TEMPUS</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const openTab = () => {
  router.push('/landing')
}
</script>


<style scoped lang="scss">
@use '@/assets/scss/variables' as variables;
.section {
  display: flex;
  justify-content: space-between;
  background-position: center;
  width: 100vw;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  padding-left: 50px;
  padding-top: 150px;
  color: variables.$white;
  font-weight: bold;
  font-size: 20px;
  height: 400px;

  &.w-40 {
    width: 40%;
  }

  &.w-60 {
    width: 60%;
  }

  p, 
  h2 {
    font-size: 25px;
    font-weight: 100;
    position: relative;
    z-index: 1;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity 0.5s ease;
    z-index: 2;
    opacity: 1;
  }

  &:hover::before {
    opacity: 0;
  }
}

.aliquam {
  background-image: url(@/assets/img/pic01.png);
}
.aliquam::before {
  background-color: rgba(0, 100, 255, 0.6);
}
.tempus {
  background-image: url(@/assets/img/pic02.png);
}
.tempus::before {
  background-color: rgba(138, 43, 226, 0.6);
}
.etiam {
  background-image: url(@/assets/img/pic06.png);
}
.etiam::before {
  background-color: rgba(255, 215, 0, 0.6);
}
.magna {
  background-image: url(@/assets/img/pic03.png);
}
.magna::before {
  background-color: rgba(34, 139, 34, 0.6);
}
.consequat {
  background-image: url(@/assets/img/pic05.png);
}
.consequat::before {
  background-color: rgba(220, 20, 60, 0.6);
}
.ipsum {
  background-image: url(@/assets/img/pic04.png);
}
.ipsum::before {
  background-color: rgba(255, 140, 0, 0.6);
}

@media (max-width: variables.$breakpoint-xl) {
  .gallery-item {
    padding-left: 30px;
    padding-top: 100px;
    height: 350px;
    p,
    h2 {
      font-size: 22px;
    }
  }
}

@media (max-width: variables.$breakpoint-lg) {
  .section {
    flex-direction: column;
    width: 100vw;
  }
  .gallery-item {
    width: 100% !important;
    height: 220px;
    padding-left: 15px;
    padding-top: 40px;
    font-size: 16px;
    p, h2 {
      font-size: 18px;
    }
  }
}
</style>