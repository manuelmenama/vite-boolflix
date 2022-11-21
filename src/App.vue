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

    getSearchedMovie() {
      

      axios.get(store.apiUrl, {
        params: {
          api_key: '83e8c5bc16f2790bc33e33ab7e0b420e',
          query: store.searchedQuery
        }
      })
      .then(result => {

        store.reqestedResult = result.data.results
        console.log(result.data.results);

      })
      .catch(error => {
        console.log(error);
      })

    }

  },
  mounted() {
    this.getSearchedMovie();
  }
}
</script>

<template>

  <main>

    <AppHeader
    @startSearch="getSearchedMovie()"/>

    <AppWrapper />

  </main>
  
</template>

<style lang="scss">

@use './styles/general.scss';

</style>