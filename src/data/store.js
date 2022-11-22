import { reactive } from "vue";

export const store = reactive ({

  apiUrl: 'https://api.themoviedb.org/3/search/',
  apiParams: {
    api_key: '83e8c5bc16f2790bc33e33ab7e0b420e',
    query: 'matrix',
    language: 'it-IT'
  },
  movie: [],
  tv: []

});