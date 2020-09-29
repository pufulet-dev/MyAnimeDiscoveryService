<template>
  <div id="hero">
    <img :src="hero.image" class="imageHS">
    <div>
      <span  id="heroTitle"> {{hero.title}} </span>
      <span id="heroDescription"> {{hero.description}} </span>
    </div>
    <router-link :to="'/show/' + hero.id" class="buttonText"> Watch Now </router-link>
  </div>
</template>

<script>
export default {
  name: "HeroSection",
  data() {
    return {
      // title: "Title of the Anime",
      // description: "Anime's Description",
      // image: "https://i.pinimg.com/564x/9a/92/a9/9a92a99c7b19e66d8c17dadb8e93af28.jpg",
      // id: 63,
    }
  },
  created: function() {
    this.$store.dispatch("fetchHero");
  },
  computed: {
    hero: function() {
      return this.$store.state.home.hero;
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Abel&family=Satisfy&display=swap');  #hero {
    /* background-color: black; */
    position: relative;
  }
  #heroTitle {  
    position: absolute;
    width:44%;
    top: 19%;
    left: 0; 
    display: inline;
    letter-spacing: 2px;
    /* font-family: 'Epilogue', sans-serif; */
    font-size: 50px;
    text-align: left;
    margin-left: 3%;
    font-family: 'Abel', sans-serif;
    background-color:rgba(105, 105, 105, 30%); 
    color: white;
  }
  #heroDescription {
    position: absolute;
    width:25%;
    top: 26%;
    left: 0; 
    display: inline;
    letter-spacing: 2px;
    /* font-family: 'Epilogue', sans-serif; */
    font-size: 30px;
    text-align: left;
    margin-left: 4%;
    margin-top: 70px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 8; /* number of lines to show */
    -webkit-box-orient: vertical;
    font-family: 'Abel', sans-serif;
    font-style: italic;
    color: white;
  }
  .imageHS{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 98%;
    height: auto;
    border-radius: 10px;
    /* opacity: 16%; */
    /* box-shadow: 0 0 16px 8px black inset; */
    position: relative;
  }
  .buttonText {
    /* position: absolute;
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
    font-family: 'Balsamiq Sans', cursive;
    font-size: 45px;
    color: black; */
    box-shadow: 0 12px 16px 0 black, 0 12px 16px 0 black;
    background-color: transparent;
    transition: all 0.3s ease 0s;
    position: absolute;
    top: 85%;
    left: 15%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    font-size: 66px;
    width: 20%;
    border-radius: 66px;
    border-radius: 66px;
    color: transparent;
    text-decoration: none;
    line-height: 51px;
    cursor: pointer;
    font-size: 35px;
    color: white;
    text-align: center;
    font-family: 'Abel', sans-serif;
  }
  .buttonText:hover {
    /* color: white;
    box-shadow: 0 12px 16px 0 black, 0 12px 16px 0 black;
    background-color: transparent;
    transition: all 0.3s ease 0s; */

    /* background-color: #ea2d2e;
    color: black;
    text-shadow: none; */
    color: #ea2d2e;
    background-color: black;
  }
</style>
