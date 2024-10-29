<template>
  <div :class="['movie', { 'movie__horizontal-list': isHorizontalList }]">
    <NuxtLink
      :to="`/${movie.kinopoiskId}`"
      :class="[
        'movie__link',
        {
          'movie__link--horizontal-list': isHorizontalList,
        },
      ]"
    >
      <img
        :src="movie.posterUrlPreview"
        :class="[
          'movie__img',
          { 'movie__img--horizontal-list': isHorizontalList },
        ]"
      />
      <p
        :class="[
          'movie__title',
          { 'movie__title--horizontal-list': isHorizontalList },
        ]"
      >
        {{ movie.nameRu }}
      </p>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { movie } = defineProps(["movie"]);

const { isHorizontalList } = useMovies();
</script>

<style lang="scss" scoped>
.movie {
  background-color: aliceblue;
  margin-left: 10px;
  margin-bottom: 10px;
  width: 238px;
  height: 420px;
  text-decoration: none;

  &__horizontal-list {
    width: 1000px;
    height: 180px;
    margin-bottom: 20px;
  }

  &__link {
    text-decoration: none;
  }

  &__link--horizontal-list {
    display: flex;
  }

  &__img {
    width: 238px;
    height: 350px;
  }

  &__img--horizontal-list {
    width: 120px;
    height: 180px;
  }

  &__title {
    word-break: break;
    padding-left: 10px;
    font-size: 18px;
    color: rgb(56, 56, 56);
  }

  &__title--horizontal-list {
    font-size: 26px;
    padding-left: 30px;
    font-weight: bold;
  }
}
</style>
