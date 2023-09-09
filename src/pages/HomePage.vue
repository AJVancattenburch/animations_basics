<template>
  <div class="container-fluid">
    <div class="" style="overflow: hidden;">
      <div class="animate d-flex justify-content-center align-items-center mt-5">
        <MyButton />
      </div>
    </div>
  </div>
</template>

<script>

import MyButton from '../components/MyButton.vue';

export default {
  setup() {
    
    return {
      
    }
  },
  components: {
    MyButton,
  }
}
</script>

<style scoped lang="scss">
@import "../src/assets/scss/variables.scss";

.animate {
  animation: slideDown 1s ease-in-out forwards;
}

h3 {
  color: var(--text-primary);
  font-weight: bold;
  animation: fadeIn 3s ease-in-out 2s forwards;
}

span {
  color: var(--bg-tertiary);
  text-shadow: .5px .5px 1px var(--text-primary);
  opacity: 0;
  animation: fadeIn 3s ease-in-out 2s forwards;
}

.hidden {
  display: none;
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

@keyframes fadeInOut {
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
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

@keyframes slideInOut {
  0%, 100% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(0);
  }
}


@keyframes slideDown {
  0% {
    transform: translateY(1500px);
  }
  100% {
    transform: translateX(0)
  }
}

.vue-logo {
  height: 100%;
  width: 10%;
  animation: 
    spring 2s ease-in-out forwards;
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

@keyframes settleToScreen {
  0% {
    opacity: 0;
    transform: translateY(0) /* Start and end position */
  }
  20% {
    transform: translateY(-20px); /* First spring up  */
  }
  40% {
    transform: translateY(10px) scale(1); /* First bounce back down */
  }
  60% {
    transform: translateY(-5px) scale(1); /* Second spring up */
  }
  80% {
    transform: translateY(2px) scale(1); /* Final bounce back down */
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1); /* End position */
  }
}

</style>