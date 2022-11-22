<script>

import axios from 'axios'

import {store} from "./data/store"

import AppHeader from "./components/AppHeader.vue"
import AppWrapper from "./components/AppWrapper.vue"

export default {
  name: 'App',
  data() {
    return {
      store
    }
  },
  components: {
    AppHeader,
    AppWrapper
  },
  methods: {

    getSearchedMovie(type) {
      

      axios.get(store.apiUrl + type, {params: store.apiParams} )
      .then(result => {

        store[type] = result.data.results;
        console.log(result.data.results);

      })
      .catch(error => {
        console.log(error);
      })

    },
    startSearch() {
      store.movie = [];
      store.tv = [];

      if(store.selectedType===""){
        this.getSearchedMovie('movie');
        this.getSearchedMovie('tv');
      }else this.getSearchedMovie(store.selectedType);
    }
  },
  mounted() {
    this.startSearch();
  }
}
</script>

<template>

  <main>

    <AppHeader
    @startSearch="startSearch()"/>

    <AppWrapper />

  </main>
  
</template>

<style lang="scss">

@use './styles/general.scss';

</style>