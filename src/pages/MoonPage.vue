<template>
  <div class="container-fluid">
    <div class="row spanimate" style="height: 100vh;">
      <div class="animate2 col-12 d-flex justify-content-center align-items-center">
        <div class="animate">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.spanimate {
  height: 100vh;
  width: 100vw;
  background-position: center;
  background-repeat: repeat;
  background-image: url(../assets/img/spaceman.jpg);
  animation: spanScreen 20s ease-in-out infinite;
}

@keyframes spanScreen {
  0%, 100% {
    background-position: left top;
  }
  25% {
    background-position: right bottom;
  }
  50% {
    background-position: left bottom;
  }
  75% {
    background-position: right top;
  }
}
</style>