<template>
  <div>
    <router-link :to="'/show/'+id">
      <p id="allCard">
        <img 
          class="cardImage"
          :src="`${image}`">
        <span class="title"> {{title}} </span>
      </p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: { title: String, image: String, id: String },
}
</script>

<style>
  .cardImage {
    border: black;
    height: auto;
    width: 160px;;
  }
  #allCard {
    height: 287px;
    text-decoration: none;
    background: rgb(218, 216, 216);
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
    text-decoration: none;
    margin: 5px;
    letter-spacing: 1px;
    font-weight: bold;
  }
</style>
