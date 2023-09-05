<template>
  <section class="my-links">
    <ul class="menu">
      <li>
        <a @click="handleHome" title="Earth: Go Back Home"></a>
      </li>
      <li>
        <a @click="handleOcean" title="Water World: Learn about Filter Class property Animations"></a>
      </li>
      <li>
        <a @click="handleUniverse" title="Cosmos: Learn about">
        </a>
      </li>
      <li>
        <a @click="handleNeon" title="Neon World: Learn how to Create a True 'Neon' Effect"></a>
      </li>
      <li>
        <a @click="handleMoon" title="Moon: Learn about Parallax Keyframe Animations / Background Image Panning"></a>
      </li>
    </ul>
  </section>
</template>

<script>
import { useRouter } from "vue-router";
import { logger } from "../utils/Logger.js";
export default {
  setup() {
    const router = useRouter()

    async function handleHome() {
      try {
        await router.push({ name: 'Home', path: '/' })
      } catch (error) {
        logger.error(error)
      }
    }

    async function handleOcean() {
      try {
        await router.push({ name: 'Ocean', path: '/ocean' })
      } catch (error) {
        logger.error(error)
      }
    }

    async function handleUniverse() {
      try {
        await router.push({ name: 'Universe', path: '/universe' })
      } catch (error) {
        logger.error(error)
      }
    }

    async function handleNeon() {
      try {
        await router.push({ name: 'Neon', path: '/neon' })
      } catch (error) {
        logger.error(error)
      }
    }

    async function handleMoon() {
      try {
        await router.push({ name: 'Moon', path: '/moon' })
      } catch (error) {
        logger.error(error)
      }
    }

    return {
      handleHome,
      handleOcean,
      handleUniverse,
      handleNeon,
      handleMoon
    }
  },
}
</script>

<style lang="scss">
@import "../src/assets/scss/variables.scss";
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

.my-links {
  width: 200px;
  height: 200px;
  line-height: 175px;
  border-radius: 50%;
  background-image: url(../assets/img/menu-earth.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin: 190px auto;
  position: absolute;
  top: 23rem;
  left: 6rem;
  cursor: pointer;
  text-align: center;
  font-size: 2.75em;
  font-weight: bold;
  color: #faad61;
  text-shadow: 2px 2px 2px #777;
  transition: .24s .2s;

  &:hover {
    text-shadow: 1px 1px 1px var(--text-shadow);
    box-shadow: 2px 0 2px 0 var(--shadow-element);
    transform: translateY(-15px);
    transition: .7s;

    span.bubble {
      top: .5rem;
    }
    .mdi-menu-up {
      display: none !important;
    }
  }
}

.my-links::before {
  content: '';
  position: absolute;
  display: block;
  background: #353535a7;
  top: 60%;
  right: 10%;
  width: 85%;
  height: 100%;
  cursor: none;
  transform: perspective(1em) 
             rotateX(40deg) 
             scale(1, .25);
  filter: blur(1em);
  z-index: -1;
}
.my-links .menu {
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: -84px;
  left: -84px;
  border: 150px solid transparent;
  border-radius: 50%;
  transform: scale(0);
  transition: transform .5s ease-in-out;
  z-index: -1;
}
.my-links:hover .menu {
  transition: transform .5s ease-in-out;
  transform: scale(1);
  z-index: 1;
}
.my-links:hover .menu li {
  transition: transform .5s ease-in-out;
}
.my-links .menu li a {
  width: 60px;
  height: 60px;
  line-height: 60px;
  border-radius: 50%;
  position: absolute;
  font-size: 59%;
  color: #e37c15;
  transition: all .5s ease-in-out;
}

.my-links::before {
  content: '';
  position: absolute;
  display: block;
  background: #353535a7;
  top: 60%;
  right: 10%;
  width: 85%;
  height: 100%;
  cursor: none;
  transform: perspective(1em) 
             rotateX(40deg) 
             scale(1, .25);
  filter: blur(1em);
  z-index: -1;
}

.mdi-menu-up {
  color: #f6ae55de;
  font-size: 1.5em;
  text-shadow: 1px 2px 2px #6580AE;
  // animation: popInOut .75s ease-in-out 1s forwards;
  transition: all .5s ease-in-out;
}

// @keyframes popInOut {
//   0% {
//     transform: translateY(0);
//   }
//   50% {
//     transform: translateY(-.85em) 
//                scale(1.2);
//   }
//   100% {
//     transform: translateY(-.6em) 
//                scale(1.1);
//   }
// }

.my-links:hover::before {
  background: #191667;
  transition: .7s;
}

.my-links:hover .menu li:nth-child(1) a {
  background-image: url(../assets/img/menu-earth.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transform: rotate(200deg) 
             translate(142px) 
             rotate(-200deg);
}
.menu li:nth-child(1) a::after {
  content: '';
  position: absolute;
  display: block;
  background: #2524545a;
  top: 75%;
  left: 5%;
  width: 80%;
  height: 90%;
  filter: blur(1em);
  transform: perspective(1em) 
             rotateX(40deg) 
             scale(1, .35);
} 

.my-links:hover .menu li:nth-child(2) a {
  background-image: url(../assets/img/ocean-planet.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transform: rotate(235deg) 
             translate(142px) 
             rotate(-235deg);
}
.menu li:nth-child(2) a::after {
  content: '';
  position: absolute;
  display: block;
  background: #2524545a;
  top: 75%;
  left: 5%;
  width: 80%;
  height: 90%;
  filter: blur(1em);
  transform: perspective(1em) 
             rotateX(40deg) 
             scale(1, .35);
} 

.my-links:hover .menu li:nth-child(3) a {
  background-image: url(../assets/img/universe.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0 0 15px 5px #000;
  transform: rotate(270deg) 
             translate(142px) 
             rotate(-270deg);
}
.menu li:nth-child(3) a::after {
  content: '';
  position: absolute;
  display: block;
  top: 75%;
  left: 5%;
  width: 80%;
  height: 90%;
  filter: blur(1em);
  transform: perspective(1em) 
             rotateX(40deg) 
             scale(1, .35);
} 

.my-links:hover .menu li:nth-child(4) a {
  background-image: url(../assets/img/neon-planet.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: brightness(2);
  transform: rotate(305deg) 
             translate(142px) 
             rotate(-305deg);
}
.menu li:nth-child(4) a::after {
  content: '';
  position: absolute;
  display: block;
  background: #f1d8fe5a;
  top: 65%;
  left: 5%;
  width: 80%;
  height: 90%;
  filter: blur(1em);
  transform: perspective(1em) 
             rotateX(40deg) 
             scale(1, .35);
} 

.my-links:hover .menu li:nth-child(5) a {
  background-image: url(../assets/img/moon-landing.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transform: rotate(340deg) 
             translate(142px) 
             rotate(-340deg);
}

.menu li:nth-child(5) ::after {
  content: '';
  position: absolute;
  display: block;
  background: #6269a558;
  top: 75%;
  left: 5%;
  width: 90%;
  height: 100%;
  filter: blur(1em);
  transform: perspective(1em) 
             rotateX(40deg) 
             scale(1, .35);
}

.my-links:hover .menu li:nth-child(6) a {
  background-image: url(../assets/img/sun.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0 0 15px #efff15a3;
  filter: brightness(1.5) contrast(1.5);
  transform: rotate(375deg) 
             translate(142px) 
             rotate(-375deg);
}

.menu li:nth-child(6) a::after {
  content: '';
  position: absolute;
  display: block;
  background: #fad5c9bc;
  top: 75%;
  left: 5%;
  width: 80%;
  height: 90%;
  filter: blur(1em);
  transform: perspective(1em) 
             rotateX(40deg) 
             scale(1, .35);
}

.my-links:hover .menu li:nth-child(7) a {
  transform: rotate(410deg) 
             translate(142px) 
             rotate(-410deg);
}

.menu li:nth-child(7) a::after {
  content: '';
  position: absolute;
  display: block;
  background: #000f9abb;
  top: 75%;
  left: 5%;
  width: 80%;
  height: 90%;
  filter: blur(1em);
  transform: perspective(1em) 
             rotateX(40deg) 
             scale(1, .35);
}

.my-links:hover .menu li:nth-child(8) a {
  transform: rotate(445deg) 
             translate(142px) 
             rotate(-445deg);
}

.menu li:nth-child(8) a::after {
  content: '';
  position: absolute;
  display: block;
  background: #b83419f8;
  top: 75%;
  left: 5%;
  width: 80%;
  height: 90%;
  filter: blur(1em);
  transform: perspective(1em) 
             rotateX(40deg) 
             scale(1, .35);
}

.my-links:hover .menu li a:hover {
  background: #ff5beb8a;
  color: #191667;
  text-shadow: 1px 1px 1px aliceblue;
  filter: drop-shadow(0 0 3px #ff5beb8a);
  transition: all .5s ease-in-out;
}

.my-links:hover .menu li a:hover i {
  color: black;
  transition: all .5s ease-in-out;
}

.my-links:hover .menu li a i {
  transition: all .5s ease-in-out;
}


.hidden {
  display: none;
}
</style>