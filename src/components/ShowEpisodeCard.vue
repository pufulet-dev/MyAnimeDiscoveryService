<template>
  <div class="wrapper">
    <img 
      src="https://d1nslcd7m2225b.cloudfront.net/Pictures/2000x2000fit/5/5/3/1309553_weatheringwithyou_0hero_354941.jpg"
      class="episodeImage">
    <!-- <br> -->
    <span class="episodeTitle"> {{episodeTitle}} </span>
  </div>
</template>

<script>
export default {
 name: "ShowCard",
 data() {
   return {
     episodeTitle: "This is the beginning",
   }
 } 
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Epilogue&display=swap');
  .wrapper {
    display: block;
    /* border: black dashed; */
    width: 320px;
    margin-left: 75px;
    margin-rigth: 44px;
    margin-top: 20px;
  }
  .episodeImage {
    width: 280px;
    margin: 10px;
  }
  .episodeTitle {
    color: black;
    font-size: 25px;
    display: block;
    margin-bottom: 20px;
    font-family: 'Epilogue', sans-serif;
  }
  .wrapper:hover {
    transform: scale(1.05);
    transition: transform 0.25s;
  }
</style>