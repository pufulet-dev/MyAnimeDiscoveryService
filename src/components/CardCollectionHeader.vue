<template>
  <div>
    <span class="collHeader">
      <h1 class="msg"> {{msg}} </h1>
      <router-link to="/browse"> <h3 class="seeMore"> See More > </h3> </router-link>
    </span>
  </div>
</template>

<script>
export default {
  name: "CardCollectionHeader",
  data() {
    return {
    }
  },
  props: {
    msg: String,
  }
}
</script>

<style>
  .collHeader {
    display: flex;
    justify-content: space-between;
    margin-right: 6%;
    margin-left: 6%;
    margin-top: 130px;  
    font-family: 'Oswald', sans-serif;
    /* background-color: #ea2d2e; */
  }
  .msg {
    color: black;
    font-family: 'Playfair Display', serif;
    font-size: 40px;
    font-style: italic;
  }
  .seeMore {
    text-decoration: inherit;
    color: black;
    /* text-shadow: 2px 2px 5px #ea2d2e; 
    text-shadow: 3px 3px 5px black;  */
    border-radius: 4px;
    font-size: 30px;
  }
  .seeMore:hover {
    transition: 0.6s;
    padding-right: 25px;
        font-style: italic;
  }
</style>
