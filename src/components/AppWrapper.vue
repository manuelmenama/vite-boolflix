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
    <AppCard
      v-for="movie in store.reqestedResult"
      :key="movie.id"
      :movie="movie"/>
  </ul>
  
</div>
  
</template>

<style lang="scss" scoped>

</style>