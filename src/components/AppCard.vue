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

  
  <li
    v-if="movie.overview"
    class="main-container">

    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img :src="'https://image.tmdb.org/t/p/' + 'w342' + movie.poster_path" :alt="movie.title || movie.name">
        </div>
        <div class="flip-card-back">
          <ul>
            <h3>{{movie.title || movie.name}}</h3>
            <li>
              <span>Lingua:</span>
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
              <span>Voto:</span>
              <span
                v-for="(index) in 5"
                :key="index">

                <i
                  :class="[index <= roundedVote ? 'fa-solid' : 'fa-regular']"
                  class="fa-star"></i>
              </span>
            </li>
            <li>
              <p>
                <span>Trama:</span>
                {{movie.overview}}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div> 
    <!-- <div class="placeholder">
      
      <div class="img-container">
        <img :src="'https://image.tmdb.org/t/p/' + 'w342' + movie.poster_path" alt="no cover found">



      </div>
      
    </div> -->
  </li>
  
  
</template>

<style lang="scss" scoped>

@use '../styles/partials/variables' as *;

li{
  list-style: none;
  ul{
    li span:first-child{
      font-weight: bolder;
    }
    margin-left: 1rem;
    img{
      width: 1.5rem;
    }
  }
}

li.main-container{
  padding: 1rem;
}

.flip-card {
  background-color: transparent;
  width: 342px;
  height: 513px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
}

.flip-card-back {
  background-color: lighten($color: $primary-color, $amount: 20%);
  color: white;
  transform: rotateY(180deg);
  padding: 2rem 0;
  overflow-y: auto;
  h3{
    margin-bottom: 1rem;
  }
  li{
    margin-bottom: 0.5rem;
    
  }
  li>p{
    span{
      font-weight: bolder;
    }
  }
  i.fa-star{
    color: goldenrod;
  }
}

</style>