<template>
  <div class="episodeCollection">
    <EpisodeCard></EpisodeCard>
    <EpisodeCard></EpisodeCard>
    <EpisodeCard></EpisodeCard>
    <EpisodeCard></EpisodeCard>
    <EpisodeCard></EpisodeCard>
    <EpisodeCard></EpisodeCard>
    <EpisodeCard></EpisodeCard>
    <EpisodeCard></EpisodeCard>
    <EpisodeCard></EpisodeCard>
    <EpisodeCard></EpisodeCard>
  </div>
</template>

<script>
import EpisodeCard from "../components/ShowEpisodeCard.vue";
export default {
  name: "EpisodeCollection",
  data() {
    return {
    }
  },
  components: {
    EpisodeCard,
  }
}
</script>

<style>
  .episodeCollection {
    display: flex;
    flex-wrap: wrap; 
  }
</style>