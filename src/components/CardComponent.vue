<template>
  <div>
    <router-link :to="'/show/'+id">
      <p id="allCard">
        <img 
          class="cardImage"
          :src="`${image}`">
        <span class="titleOfCard"> {{title}} </span>
        <span v-if="nrep!=null" class="nrOfEpisodes"> episodes: {{nrep}} </span>
        <span v-else class="nrOfEpisodes"> movie </span>
      </p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: { title: String, image: String, id: String, nrep: String },
  data() {
    return {
      nrep: "10",
    }
  }
}
</script>

<style>
  .cardImage {
    border: black;
    height: auto;
    width: 90px;
    /* position: center; */
    margin-right: 10px;
    margin-left: 10px;
    margin-top: 1px;
  }
  #allCard {
    height: 210px;
    width: 110px;
    text-decoration: none;
    background: rgb(218, 216, 216);
    /* display: inline-block; */
    /* margin: 6px 6px 6px; */
    padding: 8px 5px 0px;
    text-align: center;
    text-decoration: none;
    -webkit-box-shadow: 0 4px 6px rgba(0, 0, 0, .3);
    -moz-box-shadow: 0 4px 6px rgba(0, 0, 0, .3);
    box-shadow: 0 4px 6px rgba(0, 0, 0, .3);
    -webkit-transition: all .20s linear;
    -moz-transition: all .20s linear;
    transition: all .20s linear;
    z-index: 0;
    display: inline-grid;
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
  .titleOfCard {
    font-family: 'Playfair Display', serif;
    font-size: 14px;
    width: 110px;
    color:black;
    text-decoration: none!important;
    text-align: center;
    font-weight: bold;
  }
  .nrOfEpisodes {
    font-family: 'Playfair Display', serif;
    font-size: 10px;
    width: 110px;
    color:black;
    text-decoration: none!important;
    text-align: center;
    margin-top: -10px;
  }
</style>
