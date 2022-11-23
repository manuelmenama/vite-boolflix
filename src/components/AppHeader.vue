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
      <input type="text" v-model.trim="store.apiParams.query">

      <select name="type" id="type" v-model="store.selectedType">
        <option value="">Film/Serie TV</option>
        <option value="movie">Films</option>
        <option value="tv">Serie TV</option>
      </select>

      <button
      @click="$emit('startSearch')">Cerca</button>
      <button
      @click="$emit('getTrendy')">Get trendy!</button>
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
    }
    select{
      margin-left: 1rem;
      height: 2rem;
    }
    button{
      padding: 0.5rem 1rem;
      margin-left: 1rem;
    }
  }
}

</style>