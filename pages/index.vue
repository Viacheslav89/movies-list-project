<template>
  <div class="catalog">
    <AppPagination />
    <div class="catalog__wrapper">
      <div v-for="movie in getMoviesList()">
        <AppMovieCard :movie="movie" />
      </div>
    </div>
  </div>
</template>


<script setup>
import { useMovies } from "./../composables/useMovies"
// import AppMovieCard from "./../components/AppMovieCard.vue"
// import AppPagination from "./../components/AppPagination.vue"


const { fetchMovies } = useMovies();
fetchMovies();

definePageMeta({
  layouts: "/",
});

const { getMoviesList } = useMovies();
</script>


<style lang="scss" scoped>
.catalog {
  background-color: rgb(26, 25, 25);
  min-height: 2000px;
  min-width: 995px;
}

.catalog__wrapper {
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  background-color: rgb(26, 25, 25);
  width: 995px;
  margin: 0 auto;
  padding-top: 30px;
}

</style>