<template>
  <div id="myApp">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import HeroSection from "./components/HeroSection.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  data() {
    return {
      image: "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcm0yNDAtYWV3LTAxNC5wbmc.png?s=Ow6jG7Ya6R3V2ezwr5u3olIazyiLcta4jH-opwiX8CQ",
    }
  },
  components: {
    Header,
    HeroSection,
    Footer,
  }
};
</script>

<style lang="scss">
  @import '../public/reset.css';
  #myApp {
    --main-color-text: white;
    /* font-family: "Avenir", Helvetica, Arial, sans-serif; */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: var(--main-color-text);
    /* text-shadow: 2px 2px 2px black; */
    font-size: 66px;
    display: block;
    flex: 1 1 auto;
    background-image: url("https://www.technocrazed.com/wp-content/uploads/2015/12/Brick-wallaper-For-Background-1.jpg");
    /* background-repeat: no-repeat;   */
    background-size: contain;
    background-position: center center; 
    /* background-opacity: 0.9; */
    /* -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover; */
  }

 </style>

//  post -> cream, patch, put -> updatam