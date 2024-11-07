<template>
  <div class="form">
    <div class="form__input--wrapper">
      <input type="search" class="form__input" v-model="searchMovieInput" placeholder="Search"/>
    </div>
  </div>
</template>


<script setup lang="ts">
import { useMyMovieStore } from './../stores/movies';

const searchMovieInput = ref('');
const store = useMyMovieStore();

watch(
  () => searchMovieInput.value,
  (newData: string, oldData: string) => {
    if (newData !== oldData) {
        setSearchMovieName();
    }
  }
);

const debounce = <T extends Function>(fn: T, ms: number) => {
  let timeout: ReturnType<typeof setTimeout>;

  return function () {
    const fnCall = () => {
      fn.apply(fn);
    };
    clearTimeout(timeout);
    timeout = setTimeout(fnCall, ms);
  };
};

const setSearchMovieName = debounce(
  () => store.searchMovieName = searchMovieInput.value,
  750
);
</script>



<style setup lang="scss">

.form__input--wrapper {
    padding-top: 20px;
    padding-right: 10px;
}

.form__input {
    width: 350px;
    height: 30px;
    border-radius: 8px;
    padding-left: 10px;
    font-size: 18px;
}

</style>