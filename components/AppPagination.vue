<template>
  <AppNavigation />
  <div class="pagination">
    <button
      :class="[
        'pagination__button',
        {
          'pagination__button--current': page === pageNumber,
        },
      ]"
      v-for="pageNumber in totalPages"
      @click="changePageNamber(pageNumber)"
    >
      {{ pageNumber }}
    </button>
  </div>
</template>

<script setup lang="ts">

import AppNavigation from "./AppNavigation.vue"
const { totalPages, page, fetchMovies } = useMovies();

const changePageNamber = (currentPage: number) => {
  page.value = currentPage;
};

watch(
  () => page.value,
  (newData: number, oldData: number) => {
    if (newData !== oldData) {
      fetchMovies();
    }
  }
);
</script>

<style scoped lang="scss">
.pagination {
  width: 300px;
  margin: 20px auto 0 auto;
}

.pagination__button--current {
  background-color: rgb(197, 179, 155);
}

.pagination__button {
  width: 60px;
  height: 40px;
  border-radius: 10px;
}
</style>
