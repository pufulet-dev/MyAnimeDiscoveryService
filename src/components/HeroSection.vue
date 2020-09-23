<template>
  <div id="hero">
    <img src="../components/cropped2.jpg" class="imageHS">
    <div id="heroTitle">
      <span class="title1"> {{heroTitle1}} </span>
      <span class="title2"> {{heroTitle2}} </span>
      <span class="title3"> {{heroTitle3}} </span>
    </div>
    <router-link to="/browse" class="buttonText">Browse</router-link>
  </div>
</template>

<script>
export default {
  name: "HeroSection",
  data() {
    return {
      heroTitle1: "Are you ready for your",
      heroTitle2: "best quality anime",
      heroTitle3: "experience?",
    }
  },
}
</script>

<style>
  #hero {
    background-color: black;
    position: relative;
  }
  .imageHS{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: auto;
    border-radius: 40px;
    opacity: 16%;
    /* border: 6px solid black;  */
    box-shadow: 0 0 16px 8px black inset;
    position: relative;
  }
  #heroTitle {  
    position: absolute;
    width:100%;
    top: 20%;
    left: 0; 
    display: inline;
    letter-spacing: 2px;
    font-family: 'Epilogue', sans-serif;
    font-size: 50px;
  }
  .title2 {
    color: #ea2d2e;
  }
  .buttonText {
    position: absolute;
    top: 85%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    font-size: 66px;
    width: 90%;
    background-color: #ea2d2e;
    border-radius: 66px;
    color: transparent;
    text-decoration: none;
    line-height: 51px;
    cursor: pointer;
  }
  .buttonText {
    font-family: 'Balsamiq Sans', cursive;
    font-size: 45px;
    color: black;
  }
  .buttonText:hover {
    color: white;
    box-shadow: 0 12px 16px 0 black, 0 12px 16px 0 black;
    background-color: transparent;
    transition: all 0.3s ease 0s;
  }
</style>
