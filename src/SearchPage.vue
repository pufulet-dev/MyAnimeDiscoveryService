<template>
  <div class="searchBar">
      <img @click="findSearch()" class="search-icon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU2Ljk2NiA1Ni45NjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU2Ljk2NiA1Ni45NjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPHBhdGggZD0iTTU1LjE0Niw1MS44ODdMNDEuNTg4LDM3Ljc4NmMzLjQ4Ni00LjE0NCw1LjM5Ni05LjM1OCw1LjM5Ni0xNC43ODZjMC0xMi42ODItMTAuMzE4LTIzLTIzLTIzcy0yMywxMC4zMTgtMjMsMjMgIHMxMC4zMTgsMjMsMjMsMjNjNC43NjEsMCw5LjI5OC0xLjQzNiwxMy4xNzctNC4xNjJsMTMuNjYxLDE0LjIwOGMwLjU3MSwwLjU5MywxLjMzOSwwLjkyLDIuMTYyLDAuOTIgIGMwLjc3OSwwLDEuNTE4LTAuMjk3LDIuMDc5LTAuODM3QzU2LjI1NSw1NC45ODIsNTYuMjkzLDUzLjA4LDU1LjE0Niw1MS44ODd6IE0yMy45ODQsNmM5LjM3NCwwLDE3LDcuNjI2LDE3LDE3cy03LjYyNiwxNy0xNywxNyAgcy0xNy03LjYyNi0xNy0xN1MxNC42MSw2LDIzLjk4NCw2eiIgZmlsbD0iIzAwMDAwMCIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />
      <input class="search" v-model="animeInput" placeholder="Search...">
      <div class="cardsName" v-if="!buttonClicked"> Type Anime </div>
      
        <div id="column">
          <p class="cardsName" v-if="buttonClicked"> Series </p>
          <div>
            <CardComponent v-for="item in series" 
              :key="item.index"
              :title="item.title"
              :image="item.image"
              :description="item.description"
              :rating="item.rating"
              :id="item.id"
            />
          </div>
        </div>
        <div id="column">
          <p  class="cardsName" v-if="buttonClicked"> Movies </p>
          <div>
            <CardComponent v-for="item in movies" 
              :key="item.index"
              :title="item.title"
              :image="item.image"
              :id="item.id"
              :rating="item.rating"
              :description="item.description"
            />
          </div>
        </div>
      
  </div>
</template>

<script>
import CardComponent from "./components/SearchCardComponent.vue";
export default {
  name: "Search",
  data() {
    return {
      animeInput: "",
      buttonClicked: false,
    }
  },
  components: {
    CardComponent,
  },
  methods: {
    findSearch: function() {
      this.buttonClicked = true;
      this.$store.state.search.inputText = this.animeInput;
      console.log(this.$store.state.search.inputText);
      this.$store.dispatch("fetchSearch");
      // console.log(this.$store.state.search.listOfCards.length);
    }
  },
  computed: {
    series: function () {
      // console.log(this.$store.state.search.listOfCards.length);
      return this.$store.state.search.listOfSeries;
    },
    movies: function () {
      return this.$store.state.search.listOfMovies;
    }
  }
}
</script>

<style>
  #column {
    float: left;
    width: 50%;
    /* flex-wrap: wrap;
    list-style:none */
    color: red;
  }
  .cardsName {
    font-size: 66px;
    color:gray;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  .searchBar {
    position: sticky;
    /* display: flex; */
    /* min-width: 100px; */
    min-height: 100%;
    height: auto !important;
    height: 100%;
    margin: 0 auto -200px;
    margin: 40px;
    /* display: flex; */
  }
  .search-icon {
    position: absolute;
    top: 39px;
    left: 6px;
    width: 20px;
    height: auto;
  }
  .search {
    border: 1px solid grey;
    border-radius: 5px;
    height: 30px;
    width: 96%;
    padding: 2px 23px 2px 30px;
    outline: 0;
    background-color: #f5f5f5;
    font-size: 20px;
    margin-right: 130px;
  }
  .search:hover, .search:focus {
    border: 1.5px solid #ea2d2e;
    background-color: white;
  }
  .search-icon:hover {
    transform: scale(1.2);
  }
</style>
