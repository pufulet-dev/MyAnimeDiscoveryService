<template>
  <div class="castWrapper">
    <MetaCard></MetaCard>
    <MetaCard></MetaCard>
    <MetaCard></MetaCard>
    <MetaCard></MetaCard>
    <MetaCard></MetaCard>
    <MetaCard></MetaCard>
  </div>
</template>

<script>
import MetaCard from "../components/ShowMetaCard.vue";
export default {
  name: "MetaCollection",
  data() {
    return {
    }
  },
  components: {
    MetaCard,
  }
}
</script>

<style>
  .castWrapper {
    display: flex;
    flex-wrap: wrap;
  }
</style>