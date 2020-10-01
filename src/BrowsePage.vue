<template>
  <div id="browseCards">
      <Card v-for="item in items" 
        :key="item.index"
        :title="item.title"
        :image="item.image"
        :description="item.description"
        :rating="item.rating"
        :id="item.id"
      />
      <button class="seeMore" @click="seeMore()"> See more... </button>
  </div>
</template>

<script>
import Card from "./components/SearchCardComponent.vue";
export default {
  name: "BrowsePage",
  components: {
    Card,
  },
  created: function() {
    this.$store.dispatch("fetchBrowse");
  },
  computed: {
    items: function() {
      return this.$store.state.browse.list;
    }
  },
  methods: {
    seeMore: function() {
      this.$store.dispatch("fetchMore");
    }
  }
}
</script>

<style>
  #browseCards {
    width: 66%;
    display: inline-block;
  }
  .seeMore {
    color: black;
  }

</style>
