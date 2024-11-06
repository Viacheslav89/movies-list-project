import axios from "axios";
import type { MoviesRequest } from "../type";
import { useMyMovieStore } from "./../stores/movies";

const store = useMyMovieStore();

const moviesRequest = ref<MoviesRequest | null>(null);
const page = ref(1);
const totalPages = ref(0);

export const useMovies = () => {
  const fetchMovies = async () => {

    const response = await axios.get(
      `https://kinopoiskapiunofficial.tech/api/v2.2/films?order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=${page.value}`,
      {
        headers: {
          "X-API-KEY": "7f16b96f-2e5b-4e01-ae0c-33b75dd9fa0a",
        },
      }
    );

    moviesRequest.value = response.data;
    totalPages.value = response.data.totalPages;
  };


  const moviesList = computed(() => {
    return moviesRequest.value?.items || [];
  });



  const getMoviesList = () => {
    return moviesList.value.filter(
      (movie) =>
        movie.nameRu &&
        movie.nameRu.toLowerCase().includes(store.searchMovieName.toLowerCase())
    );
  };
  return { page, totalPages, moviesList, getMoviesList, fetchMovies };
};
