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
  props: { title: String, image: String, id: String },
  components: {
    SearchCard,
  },
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
