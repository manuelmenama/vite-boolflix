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
    {{movie.original_title}}
    <ul>
      <li>Titolo tradotto: {{movie.title}}</li>
      <li>Lingua: {{movie.original_language}}</li>
      <li>Voto: {{movie.vote_average}}</li>
    </ul>
  </li>
  
  
</template>

<style lang="scss" scoped>

li{
  ul{
    margin-left: 1rem;
  }
}

</style>