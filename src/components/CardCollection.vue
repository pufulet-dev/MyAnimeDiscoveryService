<template>
  <div id="app">
    <span class="cards">
      <CardComponent></CardComponent>
      <CardComponent></CardComponent>
      <CardComponent></CardComponent>
      <CardComponent></CardComponent>
      <CardComponent></CardComponent>
      <CardComponent></CardComponent>
    </span>
  </div>
</template>

<script>
import CardComponent from "../components/CardComponent";
export default {
  name: "CardCollection",
  data() {
    return {
    }
  },
  components: {
    CardComponent,
  }  
}
</script>

<style>
  .cards {
    display: flex;
    justify-content: space-around;
    margin: 60px;
  }
</style>
