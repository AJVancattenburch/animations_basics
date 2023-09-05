<template>
  <div class="container-fluid">
    <div class="row spanimate" style="height: 100vh; overflow: hidden;">
      <div class="spaceship g-0">

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
  animation: spanScreen 20s infinite;
  transform: scale(1.2);
}

@keyframes spanScreen {
  0%, 100% {
    background-position: left top;
    transform: rotate(0) scale(2);
  }
  25% {
    background-position: right bottom;
    transform: rotate(10deg) scale(2.3) perspective(100px) rotateX(10deg);
  }
  50% {
    background-position: left bottom;
    transform: rotate(-360deg) scale(2.3) perspective(100px) rotateX(10deg);
  }
  75% {
    background-position: right top;
    transform: rotate(10deg) scale(2.3) perspective(100px) rotateX(10deg);
  }
}
</style>