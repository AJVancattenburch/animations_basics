<template>
  <div class="container-fluid">
    <div class="row bg-ocean">
      <div class="col-12 d-flex justify-content-center align-items-center">
        <div class="shark-container">
          <img
            src=../assets/img/shark.gif
            alt="shark"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.bg-ocean {
  background-image: url(../assets/img/ocean.gif);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  width: 100vw;
}

.shark-container {
  width: 50%;
  height: 50%;
  aspect-ratio: 1/1;
  animation: attack 5s ease-in-out forwards;
}

@keyframes attack {
  0% {
    position: relative;
    transform: 
      translateZ(1000px)
      translateX(-100%)
      translateY(100%)
      scale(0);
    opacity: 0;
  }
  99% {
    transform:
      translateZ(0)
      translateX(200%)
      translateY(0)
      scale(2);
    opacity: 1;
  }
  100% {
    transform:
    translateZ(0)
    translateX(250%)
    translateY(0)
    scale(0);
    display: none;
    opacity: 0;
  }
}


</style>