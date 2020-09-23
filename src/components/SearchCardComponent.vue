<template>
  <div id="searchCard">
    <img 
      src="https://upload.wikimedia.org/wikipedia/en/6/66/Weathering_with_You_Poster.jpg" 
      class="searchImage">
    <p class="searchTitle"> {{cardTitle}} </p>
    <div class="rating">
      <p class="ratingValue"> {{rating}} </p>
      <img src="https://image.flaticon.com/icons/png/512/130/130188.png" class="star">
    </div>
    <div class="about">
      {{description}}
    </div>
    <router-link to="/show" class="watchButton">
      <button class="watchButton">Watch Now</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "SearchCardComponent",
  data() {
    return {
      cardTitle: "Weathering With You",
      rating: "9/10",
      description: "This is a super short paragraph that should convince you to watch the movie.",
    }
  }
}
</script>

<style>
  #searchCard {
    /* border: black dashed; */
    -moz-box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.6);
    -webkit-box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.6);
    box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.6);
    filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=3,MakeShadow=true,ShadowOpacity=0.30);
    -ms-filter: "progid:DXImageTransform.Microsoft.Blur(PixelRadius=3,MakeShadow=true,ShadowOpacity=0.30)";
    zoom: 1;
    background-color: rgb(232 232 232);
    position: relative;
    margin: 40px;
    width: 90%;
    display: grid;
    grid-template: 20px 40px 40px 80px 60px / 20px 1fr 4fr;
  }
  .searchImage {
    height: 200px;
    width: auto;
    position: relative;
    grid-area: 2 / 2 / 6 / 3;
  }
  .searchTitle {
    grid-area: 2 / 3 / 3 / 4;
    color: black;
    font-size: 25px;
    text-align: center;
  }
  .ratingValue {
    color: black;
    font-size: 20px;
    margin-top: 10px;
    grid-area: 3 / 3;
  }
  .star {
    width: 26px;
    height: 26px;
    grid-area: 3 / 3;
    margin: 5px;
  }
  .rating {
    display: flex;
    grid-area: 3 / 3;
    text-align: center;
    position: center;
    margin-left: 16px;
  }
  .about {
    grid-area: 4 / 3 / 5 / 4;
    font-size: 20px;
    color: black;
    margin-bottom: 5px;
    margin-left: 10px;
    margin-right: 10px;
  }
  .watchButton {
    grid-area: 5 / 3 / 6 / 4;
    width: 120px;
    height: 31px;
    font-size: 17px;
    margin: 5px;
    text-align: center;
    margin-bottom: 10px;
    margin-left: 10px;
  }
</style>
