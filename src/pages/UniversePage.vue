<template>
  <div class="container-fluid">
    <div class="row spanimate" style="height: 100vh; overflow: hidden;">
      <div class="spaceship">
        <div class="animate2 col-12 d-flex justify-content-center align-items-center">
          <div class="animate">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.spanimate {
  width: 100vw;
  background-position: center;
  background-size: cover;
  background-repeat: repeat;
  background-image: url(../assets/img/bg-universe.jpg);
}

.spaceship {
  width: 100vw;
  height: 100vh;
  background-image: url(../assets/img/spaceship.png);
  background-size: cover;
  background-repeat: repeat;
  background-position: center;
  animation: doStuffFly 10s ease-in-out infinite;
}

@keyframes doStuffFly {
  0%, 100% {

  }
  25% {

  }
  50% {

  }
  75% {

  }
}

</style>