<script>
export default {
  name: 'AppCard',
  props: {
    movie: Object
  },
  computed:{
    roundedVote() {
      let baseFiveVote = this.movie.vote_average;
      baseFiveVote = baseFiveVote / 2;
      baseFiveVote = Math.round(baseFiveVote);
      return baseFiveVote;
    }
  }
}
</script>

<template>

  
  <li>
    <h3>{{movie.title || movie.name}}</h3>
    <img :src="'https://image.tmdb.org/t/p/' + 'w154' + movie.poster_path" alt="">
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
      <li>
        
        <span
          v-for="(index) in 5"
          :key="index">
          <i
            :class="[index <= roundedVote ? 'fa-solid' : 'fa-regular']"
            class="fa-star"></i>
        </span>
      
      </li>
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