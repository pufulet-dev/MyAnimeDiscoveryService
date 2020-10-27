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
@import url('https://fonts.googleapis.com/css2?family=Sacramento&family=Source+Sans+Pro&display=swap');
 #hero {
    /* background-color: black; */
    position: relative;
  }
  #heroTitle {
    position: absolute;
    width: 29%;
    top: 19%;
    left: 0;
    display: inline;
    letter-spacing: 2px;
    font-size: 40px;
    text-align: center;
    margin-left: 12%;
    /* font-family: 'Josefin Sans', sans-serif; */
    font-family: 'Source Sans Pro', sans-serif;
    /* background-color: rgba(144, 207, 255, 0.3); */
    color: rgb(248, 197, 197);
    font-weight: semibold;
    border-radius: 10px;
    /* -webkit-text-stroke: 1px rgb(109, 94, 94); */
    text-shadow: 2px 2px 3px rgb(236, 161, 238);
}
  #heroDescription {
    position: absolute;
    width: 25%;
    top: 26%;
    left: 0;
    display: inline;
    letter-spacing: 2px;
    font-size: 23px;
    text-align: left;
    margin-left: 13.5%;
    margin-top: 70px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
    font-family: 'Source Sans Pro', sans-serif;
    color: rgb(248, 197, 197);
}
  .imageHS{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    height: auto;
    border-radius: 10px;
    position: relative;
    -webkit-box-shadow: 21px 22px 137px 45px rgba(0,0,0,0.75);
    -moz-box-shadow: 21px 22px 137px 45px rgba(0,0,0,0.75);
    box-shadow: 21px 22px 137px 45px rgba(0,0,0,0.75);
    margin-bottom: 80px;
  }
  .buttonText {
    box-shadow: 0 12px 16px 0 black, 0 12px 16px 0 black;
    background-color: transparent;
    transition: all 0.3s ease 0s;
    position: absolute;
    top: 85%;
    left: 24%;
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
    color: #ea2d2e;
    background-color: black;
  }
</style>
