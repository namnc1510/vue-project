<template>
  <footer id="footer">
    <div class="inner">
      <ul class="icons">
        <li><a href="#" class="icon brands alt fa-twitter"><span class="label">Twitter</span></a></li>
        <li><a href="#" class="icon brands alt fa-facebook-f"><span class="label">Facebook</span></a></li>
        <li><a href="#" class="icon brands alt fa-instagram"><span class="label">Instagram</span></a></li>
        <li><a href="#" class="icon brands alt fa-github"><span class="label">GitHub</span></a></li>
        <li><a href="#" class="icon brands alt fa-linkedin-in"><span class="label">LinkedIn</span></a></li>
      </ul>
      <ul class="copyright">
        <li>&copy; Untitled</li>
        <li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
        <li>Demo Images: <a href="https://unsplash.com">Unsplash</a></li>
      </ul>
    </div>
  </footer>
</template>

<script setup>

</script>

<style scoped lang="scss">
#footer {
  background-color: $primary-color;
  color: $text-color;
  padding: 3em 0;
  text-align: center;
  border-top: 1px solid $border-color;

  .inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2em;
  }

  .icons {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 1em;
    margin-bottom: 2em;
    padding: 0;

    li {
      margin: 0;
    }

    a {
      color: $white;
      font-size: 24px;
      transition: color 0.3s ease;

      &:hover {
        color: $secondary-color;
      }
    }
  }

  .copyright {
    list-style: none;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1em;
    padding: 0;
    font-size: 14px;

    li {
      margin: 0;
      border-right: 1px solid $border-color;
      padding-right: 1em;

      &:last-child {
        border-right: none;
        padding-right: 0;
      }
    }

    a {
      color: $secondary-color;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}

@media (max-width: $breakpoint-lg) {
  #footer {
    .icons {
      flex-wrap: wrap;
    }

    .copyright {
      flex-direction: column;
      gap: 0.5em;

      li {
        border-right: none;
        padding-right: 0;
      }
    }
  }
}
</style>