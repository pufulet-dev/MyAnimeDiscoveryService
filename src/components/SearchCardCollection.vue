<template>
  <div id="collection">
    <span class="column">
      <SearchCard></SearchCard>
      <SearchCard></SearchCard>
      <SearchCard></SearchCard>
    </span>
    <span class="column">
      <SearchCard></SearchCard>
      <SearchCard></SearchCard>
     <SearchCard></SearchCard>
    </span>
  </div>
</template>

<script>
import SearchCard from "../components/SearchCardComponent.vue";
export default {
  name: "CardCollection",
  data() {
    return {
    }
  },
  components: {
    SearchCard,
  }
}
</script>

<style>
  #collection {
    display: flex;
  }
  .column {
    flex: 50%;
  }
</style>
