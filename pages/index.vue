<template>
  <section class="container">
    <div>
      <logo class="st" />
      <h1 class="title st">
        Nice Page Transitions
      </h1>
      <h2 class="subtitle st">
        Page transitions examples
      </h2>

        <svg width="100" height="100"
  viewBox="0 0 1600 900"
  preserveAspectRatio="none"
  >
    <path
      d="M1830.4-163.8c-56-48.8-141-43-189.9,13c-48.8,56.1-44.7,222.1,92,166c136.6-56,135.2,1.3,145.6-13C1888.6-12.1,1886.5-115.1,1830.4-163.8z"
    />
  </svg>


       <div class="links st">
        <nuxt-link :to="{name: 'about'}" class="button--green">About</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import transition from '~/mixins/transitions.js'

export default {
  mixins: [ transition ],
  components: {
    Logo
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
