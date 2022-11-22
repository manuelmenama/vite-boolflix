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

  <div
    v-if="store.movie.length"
    class="movie-wrapper">
    <h2>Films</h2>
    <ul>
      <AppCard
        v-for="movie in store.movie"
        :key="movie.id"
        :movie="movie"/>
      
    </ul>
  </div>

  <div
    v-if="store.tv.length"
    class="series-wrapper">
    <h2>Serie TV</h2>
    <ul >
      <AppCard
        v-for="tv in store.tv"
        :key="tv.id"
        :movie="tv"/>
    </ul>
  </div>

  <div v-if="!store.movie.length && !store.tv.length">
    <h2>Inizia la tua ricerca...</h2>
  </div>
  
</div>
  
</template>

<style lang="scss" scoped>

@use '../styles/partials/mixin' as *;

div.container{

  .movie-wrapper,
  .series-wrapper{
    width: 100%;
    ul{
      width: calc(100%);
      @include flex('wrap');
    }
  }
}

</style>