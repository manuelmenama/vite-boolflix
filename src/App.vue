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

    getCastForCard(type, id) {

      axios.get(store.apiCastCall + type + '/' + id + '/credits', {
        params: {
          api_key: store.apiParams.api_key
        }
      })
      .then(result => {
        console.log(result.data);
      })
      .catch(error => {
        console.log(error);
      })
    },

    getTrendyResult(type) {
      axios.get(store.apiTrendyUrl + type + '/week', {
        params: {
          api_key: store.apiParams.api_key,
          language: 'it-IT'
        }
      })
      .then(result => {
        store[type] = result.data.results;
        console.log(result.data.results);
      })
      .catch(error => {
        console.log(error);
      })
    },
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
    },
    getTrendyFunct() {
      store.movie = [];
      store.tv = [];

      this.getTrendyResult('movie');
      this.getTrendyResult('tv');
    }
  },
  mounted() {
    this.getTrendyResult('movie');
    this.getTrendyResult('tv');
  }
}
</script>

<template>

  <main>

    <AppHeader
    @startSearch="startSearch()"
    @getTrendy="getTrendyFunct()"/>

    <AppWrapper />

  </main>
  
</template>

<style lang="scss">

@use './styles/general.scss';

</style>