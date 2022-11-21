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
  }
}
</script>

<template>

  <main>

    <AppHeader />

    <AppWrapper />

  </main>
  
</template>

<style lang="scss">

@use './styles/general.scss';

</style>