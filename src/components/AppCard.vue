<script>

import axios from 'axios'

import {store} from "../data/store"

export default {
  name: 'AppCard',
  props: {
    movie: Object
  },
  data() {
    return {
      store,
      actors: []
    }
  },
  methods: {
    
    getCastForCard(type, id) {

      this.actors = [];

      axios.get(store.apiCastCall + type + '/' + id + '/credits', {
        params: {
          api_key: store.apiParams.api_key
        }
      })
      .then(result => {
        this.actors = result.data.cast;
      })
      .catch(error => {
        console.log(error);
      })

    }
  },
  computed:{
    roundedVote() {
      let baseFiveVote = this.movie.vote_average;
      baseFiveVote = baseFiveVote / 2;
      baseFiveVote = Math.round(baseFiveVote);
      return baseFiveVote;
    },
    genreAssociation() {

      let result = this.movie.genre_ids


      return result

      /*let result = [];
      this.movie.genre_ids.forEach(genreOfMovie => {

        result = store.genres.filter(genre => genre.id.includes(genreOfMovie))
      });
      console.log(result);
      return result */
    }
  },
  mounted() {
    this.getCastForCard(this.movie.media_type, this.movie.id);

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
              <span>Lingua originale:</span>
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
              <span>
                Cast:
              </span>
              <span
                v-for="(act, index) in actors"
                :key="index"
                v-show="index <= 5">
                {{act.name}}
                <i v-if="index<5">- </i>
              </span>
              
            </li>
            <li>
              <span>
                Genere:
              </span>
              <span>
                {{genreAssociation}}
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