<script>

import { store } from '../data/store';
import AppCard from './AppCard.vue';

export default {
  name: 'AppWrapper',
  components: {
    AppCard
  },
  data() {
    return {
      store
    }
  }
}
</script>

<template>

<div class="container">

  <ul>
    <h2>Films</h2>
    <AppCard
      v-for="movie in store.movie"
      :key="movie.id"
      :movie="movie"/>
    
  </ul>

  <ul>
    <h2>Serie TV</h2>
    <AppCard
      v-for="tv in store.tv"
      :key="tv.id"
      :movie="tv"/>
  </ul>
  
</div>
  
</template>

<style lang="scss" scoped>

</style>