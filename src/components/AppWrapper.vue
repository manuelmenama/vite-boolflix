<script>

import { store } from '../data/store';
import AppCard from './AppCard.vue';
import AppLoader from './partials/AppLoader.vue';

import AppLoaderVue from './partials/AppLoader.vue';

export default {
  name: 'AppWrapper',
  components: {
    AppCard,
    AppLoader
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
    v-if="store.movie.length&&store.isLoaded===true"
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
    v-if="store.tv.length&&store.isLoaded===true"
    class="series-wrapper">
    <h2>Serie TV</h2>
    <ul >
      <AppCard
        v-for="tv in store.tv"
        :key="tv.id"
        :movie="tv"/>
    </ul>
  </div>


  <AppLoader
    v-if="!isLoaded"/>
  
</div>
  
</template>

<style lang="scss" scoped>

@use '../styles/partials/mixin' as *;

div.container{

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  

  .movie-wrapper,
  .series-wrapper{
    h2{
      margin: 2rem 0 1rem 0;
    }
    width: 100%;
    ul{
      width: calc(100%);
      @include flex('wrap');
    }
  }
}

</style>