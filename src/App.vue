<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <footer class="container-fluid text-light g-0">
    <div class="bg-dark col-12">
      Inspired by <span style="color: dodgerblue;">CodeWorks</span> showing this 🦚 how to fly!
    </div>
 </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: {
    Navbar,
  }
}
</script>
<style lang="scss">
@import "../src/assets/scss/variables.scss";

footer {
  display: flex;
  place-content: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 100;
  font-size: 1.25rem;
  font-weight: bold;
  text-shadow: 2px 2px 2px #000000;
  text-align: center;

    marquee {
      font-size: 1.5em;
      font-weight: bold;
      text-shadow: 2px 2px 2px #000000;
      text-align: center;
    }
}
</style>
