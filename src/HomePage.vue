<template>
  <div id="app">
    <HeroSection></HeroSection>
    <span class="allColl">
      <Header msg="Newest"></Header>
      <CardCollection></CardCollection>
      <Header msg="Popular"></Header>
      <CardCollection></CardCollection>
      <Header msg="Recently Updated"></Header>
      <CardCollection></CardCollection>
    </span>
    <MoreAnime></MoreAnime>
  </div>
</template>

<script>
import CardCollection from "./components/CardCollection.vue";
import Header from "./components/CardCollectionHeader.vue";
import MoreAnime from "./components/MoreAnimeSection.vue";
import HeroSection from "./components/HeroSection.vue";
export default {
  name: "Home",
  data() {
    return {
    }
  },
  components: {
    CardCollection,
    Header,
    MoreAnime,
    HeroSection,
    props: { msg: String },
  }
}
</script>

<style>
  .title {
    color: black;
    font-size: 30px;
  }
</style>
