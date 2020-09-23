<template>
  <div>
    <!-- <p> My Series Page </p> -->
    <iframe width="96%" height="615"  
      src="https://www.youtube.com/embed/Q6iK6DjV_iE" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>
    </iframe>
    <DescriptionCard></DescriptionCard>
    <p class="episodes"> Episodes </p>
    <EpisodeCollection></EpisodeCollection>
    <p class="cast"> Cast </p>
    <MetaCollection></MetaCollection>
  </div> 
</template>

<script>
import DescriptionCard from "./components/DescriptionCard.vue";
import EpisodeCollection from "./components/ShowEpisodeCollection.vue";
import MetaCollection from "./components/ShowMetaCollection.vue";
export default {
  name: "ShowPage",
  data() {
    return {
    }
  },
  components: {
    DescriptionCard,
    EpisodeCollection,
    MetaCollection,
  }
}
</script>

<style>
  .episodes,
  .cast {
    color: black;
    text-align: left;
    margin-left: 60px;
    margin-top: 20px;
    font-size: 25px;
  }
</style>
