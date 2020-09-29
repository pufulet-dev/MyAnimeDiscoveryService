<template>
  <div id="app">
    <HeroSection></HeroSection>
    <span class="allColl">
      <CardCollection collectionName="Most Popular"/>
      <CardCollection collectionName="Newest"/>
      <CardCollection collectionName="Recently Updated"/>
    </span>
    <MoreAnime></MoreAnime>
  </div>
</template>

<script>
import CardCollection from "./components/CardCollection.vue";
import MoreAnime from "./components/MoreAnimeSection.vue";
import HeroSection from "./components/HeroSection.vue";
export default {
  name: "Home",
  data() {
    return {
    }
  },
  // props: { collectionName : String },
  components: {
    CardCollection,
    MoreAnime,
    HeroSection,
  }
}
</script>

<style>
  .title {
    color: black;
    font-size: 30px;
  }
  .allColl {
    display: inline;
  }
</style>
