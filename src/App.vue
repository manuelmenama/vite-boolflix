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

    getTrendyResult(type) {
      store.isLoaded = false;
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
      store.isLoaded = true;
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
      store.isLoaded = true;
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
    },
    getGenreListMovie() {
      store.isLoaded = false;
      axios.get(store.apiCastCall + 'genre/' + 'movie' + '/list', {
        params: {
          api_key: store.apiParams.api_key
        }
      })
      .then(result => {
        store.genresMovie = result.data.genres;
        console.log(store.genresMovie);
      })
      .catch(error => {
        console.log(error);
      })
      store.isLoaded = true;
    },
    getGenreListTv() {
      axios.get(store.apiCastCall + 'genre/' + 'tv' + '/list', {
        params: {
          api_key: store.apiParams.api_key
        }
      })
      .then(result => {
        store.genresTv = result.data.genres;
        console.log(store.genresTv);
      })
      .catch(error => {
        console.log(error);
      })
    },
  },
  mounted() {
    this.getTrendyResult('movie');
    this.getTrendyResult('tv');

    
    this.getGenreListMovie();
    this.getGenreListTv();
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