<template>
  <div class="container-fluid">
    <div class="row" style="height: 100vh;">
      <div class="animate2 col-12 d-flex justify-content-center align-items-center">
        <div class="animate">
          <MyButton />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import MyButton from '../components/MyButton.vue'

export default {
  setup() {
    return {}
  },
  components: {
    MyButton,
  }
}
</script>

<style scoped lang="scss">
.container-fluid {
  height: 100vh;
  background: var(--bg-primary);
  background: 
    linear-gradient(
      90deg,
        var(--bg-primary) 29%,
        var(--bg-secondary) 61%,
        var(--bg-tertiary) 86%
    );
}

.animate {
  animation:
    glow
    2s
    ease-in-out
    infinite;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes slideInOut {
  0%, 100% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(0);
  }
}

@keyframes slideIn {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes slideOut {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes glow {
  0% {
    box-shadow: 0 0 0 0 #ffffffb3;
  }
  50% {
    box-shadow: 0 0 0 10px #ffffff00;
  }
  100% {
    box-shadow: 0 0 0 0 #ffffff00;
  }
}

</style>
