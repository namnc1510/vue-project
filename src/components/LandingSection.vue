<template>
  <div class="landing">
    <h2>Massa libero</h2>
    <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc
      rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel
      lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
      libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
    <div class="actions">
      <router-link to="/generic" class="button btn next scrolly">Get Started</router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/scss/variables' as variables;
.landing {
  background-color: variables.$primary-color;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  color: variables.$white;
  position: relative;
  z-index: 2;
  width: 100%;
  height: 400px;
  padding: 100px 0 0 80px;

  h2 {
    font-size: 35px;
    font-weight: 100;
    padding-bottom: 20px;
  }

  p {
    font-size: 13px;
    padding-bottom: 20px;
  }
}

@media (max-width: variables.$breakpoint-lg) {
  .landing {
    height: 250px;
    padding: 40px 0 0 20px;
    h2 {
      font-size: 22px;
    }
    p {
      font-size: 11px;
    }
  }
}
</style>