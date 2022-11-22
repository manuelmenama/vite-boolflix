<script>

import {store} from '../data/store';

export default {
  name: 'AppHeader',
  data() {
    return {
      store
    }
  }
}
</script>

<template>

  <header>

    <h1>LOGO</h1>

    <div class="input-container">
      <input type="text" v-model="store.apiParams.query">
      <button
      @click="$emit('startSearch')">Cerca</button>
    </div>

  </header>
  
</template>

<style lang="scss" scoped>

@use '../styles/partials/mixin' as *;
@use '../styles/partials/variables' as *;

header{
  padding: 0 20px;
  background-color: $primary-color;
  height: 100px;
  @include flex('center-between');
  h1{
    color: $logo-color;
  }
  .input-container{
    height: 100%;
    @include flex('center-between');
    input{
      width: 300px;
      height: 2rem;
      margin-right: 1rem;
    }
    button{
      padding: 0.5rem 1rem;
    }
  }
}

</style>