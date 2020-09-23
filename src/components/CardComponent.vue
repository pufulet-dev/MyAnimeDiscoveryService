<template>
  <div>
    <router-link to="/show">
      <p id="allCard">
        <img 
          src="https://upload.wikimedia.org/wikipedia/en/6/66/Weathering_with_You_Poster.jpg" 
          class="cardImage">
        <span class="title"> {{title}} </span>
        <span class="title"> {{episodes}} </span>
      </p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  data() {
    return {
      title: "Weathering With You",
      episodes: "[66 episodes]",
    }
  }
}
</script>

<style>
  .cardImage {
    border: black;
    height: 250px;
    width: auto;
  }
  #allCard {
    background: #ffffff;
    display: inline-block;
    margin: 15px 25px 17px;
    padding: 19px 15px 6px;
    text-align: center;
    text-decoration: none;
    -webkit-box-shadow: 0 4px 6px rgba(0, 0, 0, .3);
    -moz-box-shadow: 0 4px 6px rgba(0, 0, 0, .3);
    box-shadow: 0 4px 6px rgba(0, 0, 0, .3);
    -webkit-transition: all .20s linear;
    -moz-transition: all .20s linear;
    transition: all .20s linear;
    z-index: 0;
    /* position: relative; */
    display: inline-grid;
    max-width: min-content;
  }
  #allCard:hover {
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    transform: scale(1.1);
    z-index: 10;
    -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, .7);
    -moz-box-shadow: 0 10px 20px rgba(0, 0, 0, .7);
    box-shadow: 0 10px 20px rgba(0, 0, 0, .7);
 }
  .title {
    font-family: 'Playfair Display', serif;
    font-size: 15px;
    /* text-shadow: 2px 2px 5px #ea2d2e;  */
    /* line-height: 10px; */
    margin: 5px;
    letter-spacing: 1px;
    font-weight: bold;
  }
</style>
