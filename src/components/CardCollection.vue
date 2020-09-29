<template>
  <div id="app">
    <span>
      <Header :collectionName="collectionName"></Header>
      <div class="cards"> 
        <CardComponent v-for="item in items" 
          :key="item.index"
          :title="item.title"
          :image="item.image"
          :id="item.id"
          :nrep="item.nrOfEpisodes"
        />
      </div>
    </span>
  </div>
</template>

<script>
import CardComponent from "../components/CardComponent.vue";
import Header from "../components/CardCollectionHeader.vue";
export default {
  name: "CardCollection",
  props: {collectionName: String},
  components: {
    CardComponent,
    Header,
  },
  created: function()  {
      if (this.collectionName === "Most Popular") {
        this.$store.dispatch("fetchPopular");
        console.log(1);
      } else if (this.collectionName === "Newest") {
        this.$store.dispatch("fetchNewest");
        console.log(2);
      } else if (this.collectionName === "Recently Updated") {
        this.$store.dispatch("fetchUpdated");
        console.log(3);
      } else console.log(4);
  },
  computed: {
    items: function () {
      if (this.collectionName === "Most Popular") {
        return this.$store.state.home.popularityRank;
      } else if (this.collectionName === "Newest") {
        return this.$store.state.home.startDate;
      } else {
        return this.$store.state.home.updatedAt;
      }
    }
  } 
};
</script>

<style>
  .cards {
    display: flex;
    justify-content: space-around;
    margin: 60px;
    color: black;
  }
</style>
