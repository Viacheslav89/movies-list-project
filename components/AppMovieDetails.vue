<template>
    <AppNavigation />

  <div class="movie">
    <div class="movie__wrapper">
      <div class="movie__wrapper--description">
        <div class="movie__header-wrapper">
          <h4 class="movie__title">{{ movie?.nameRu }}</h4>

          <div class="movie__rating">
            {{ movie?.ratingKinopoisk }}
          </div>
        </div>

        <div class="movie__countries--wrapper">
          <p class="movie__countries" v-for="countryItem of movie?.countries">
            {{ countryItem.country }}
          </p>
        </div>

        <div class="movie__genres--wrapper">
          <p class="movie__genres" v-for="genreItem of movie?.genres">
            {{ genreItem.genre }}
          </p>
        </div>
        <b class="movie__year">{{ movie?.year }}</b>
      </div>
      <div class="movie__image--wrapper">
        <img class="movie__image" :src="movie?.posterUrlPreview" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Movie } from './../type';

const { id } = useRoute().params;
const { moviesList } = useMovies();


const movie = moviesList.value.find(
  (movie: Movie) => movie.kinopoiskId.toString() === id
);

</script>

<style scoped lang="scss">
.movie {
  background-color: rgb(26, 25, 25);
  height: 2000px;
  padding-top: 50px;
  min-width: 1000px;
  

  &__wrapper {
    width: 800px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  &__wrapper--description {
    background-color: rgb(226, 226, 226);
    // width: 100%;
    padding-left: 30px;
    padding-bottom: 20px;

  }

  &__header-wrapper {
    display: flex;
    justify-content: space-between;
  }

  &__title {
    font-size: 40px;
    width: 380px;
  }

  &__rating {
    font-size: 38px;
    padding: 55px 55px;
  }

  &__countries--wrapper {
    display: flex;
  }

  &__countries {
    padding-right: 10px;
    font-size: 25px;
  }

  &__genres--wrapper {
    display: flex;
  }

  &__genres {
    padding-right: 10px;
    font-size: 18px;
  }

  &__year {
    display: block;
    font-size: 30px;
    padding-top: 80px;
  }

  &__image--wrapper {
    width: 500px;
    // height: 100%;
  }

  &__image {
    display: block;
    height: 100%;
    width: 100%;

  }
}
</style>
