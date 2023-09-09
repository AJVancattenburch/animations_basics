<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <footer class="container-fluid text-light g-0">
    <div class="bg-dark col-12">
      Inspired by <span style="color: dodgerblue;">CodeWorks</span> for showing this 🦚 how to fly!
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

body {
  height: 100vh;
  background: var(--bg-primary);
  background: 
    linear-gradient(
      90deg,
        var(--bg-primary) 29%,
        var(--bg-secondary) 61%,
        var(--bg-tertiary) 86%
    );
  z-index: -1;
  animation: fadeIn .5s ease-in-out forwards;
}

footer {
  display: flex;
  place-content: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 100;
  font-size: 1rem;
  font-weight: bold;
  text-shadow: 2px 2px 2px #000000;
  text-align: center;
}
</style>
