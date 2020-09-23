<template>
  <div id="descriptionCard">
    <img src="https://upload.wikimedia.org/wikipedia/en/6/66/Weathering_with_You_Poster.jpg" class="demoImage">
    <p class="demoTitle"> {{title}} </p>
    <p class="demoSubtitle"> {{subtitle}} </p>
    <div class="demoRating">
      <p class="demoRatingValue"> {{rating}} </p>
      <img src="https://image.flaticon.com/icons/png/512/130/130188.png" class="demoStar">
    </div>
    <div class="demoAbout">
      {{description}}
    </div>
  </div>
</template>

<script>
export default {
  name: "DescriptionCard",
  data() {
    return {
      title: "Weathering With You",
      subtitle: "The New Film From Makoto Shinkai",
      rating: "10/10",
      description: "A high-school boy who has run away to Tokyo befriends a girl who appears to be able to manipulate the weather.",

    }
  }
}
</script>

<style>
  #descriptionCard {
    -moz-box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.6);
    -webkit-box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.6);
    box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.6);
    filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=3,MakeShadow=true,ShadowOpacity=0.30);
    -ms-filter: "progid:DXImageTransform.Microsoft.Blur(PixelRadius=3,MakeShadow=true,ShadowOpacity=0.30)";
    zoom: 1;
    background-color: rgb(232 232 232);
    position: relative;
    margin: 40px;
    width: 96%;
    display: grid;
    grid-template: 30px 40px 40px 40px 80px 60px / 30px 221px 1fr;
  }
  .demoImage {
    height: 240px;
    width: auto;
    position: relative;
    grid-area: 2 / 2 / 6 / 3;
    margin-left: 20px;
    margin-right: 30px;
  }
  .demoTitle {
    grid-area: 2 / 3 / 3 / 4;
    color: black;
    font-size: 25px;
    text-align: left;
    margin: 5px;
    font-weight: bold;
  }
  .demoSubtitle {
    grid-area: 3 / 3 / 3 / 4;
    color: black;
    font-size: 20px;
    text-align: left;
    margin: 5px;
  }
  .demoRatingValue {
    color: black;
    font-size: 20px;
    margin-top: 10px;
    grid-area: 4 / 3;
  }
  .demoStar {
    width: 26px;
    height: 26px;
    grid-area: 4 / 3;
    margin: 5px;
  }
  .demoRating {
    display: flex;
    grid-area: 4 / 3;
    position: center;
    margin-left: 16px;
  }
  .demoAbout {
    grid-area: 5 / 3 / 6 / 4;
    font-size: 20px;
    color: black;
    margin-bottom: 5px;
    margin-left: 10px;
    margin-right: 10px;
    text-align: left;
    margin-top: 30px;
  }
</style>
