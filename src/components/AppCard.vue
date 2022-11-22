<script>
export default {
  name: 'AppCard',
  props: {
    movie: Object
  }

}
</script>

<template>

  
  <li>
    {{movie.title || movie.name}}
    <ul>
      <li>Lingua: 
        <span
          v-if="movie.original_language==='it'">
          <img src="../assets/img/Flag_of_Italy.svg" alt="">
        </span>
        <span
          v-else-if="movie.original_language==='en'">
          <img src="../assets/img/Flag_of_the_United_Kingdom.svg" alt="">
        </span>
        <span
          v-else>
          {{movie.original_language}}
        </span>
      </li>
      <li>Voto: {{movie.vote_average}}</li>
    </ul>
  </li>
  
  
</template>

<style lang="scss" scoped>

li{
  ul{
    margin-left: 1rem;
    img{
      width: 1.5rem;
    }
  }
}

</style>