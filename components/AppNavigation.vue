<template>
  <div>
    <header>
      <nav class="nav">
        <div class="nav__wrapper">
          <div class="nav__left--wrapper">
            <p class="nav__home">
              <NuxtLink to="/" class="nav__home--link">Home</NuxtLink>
            </p>

            <button class="nav__button" @click="changeDisplayElements">
              {{ buttonTitle }}
            </button>
          </div>
          <AppFilter />
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup lang="ts">
import AppFilter from "./AppFilter.vue";

const { isHorizontalList } = useMovies();
const buttonTitle = computed(() =>
  isHorizontalList.value ? "Блок" : "Список"
);

const changeDisplayElements = () => {
  isHorizontalList.value = !isHorizontalList.value;
};
</script>

<style scoped lang="scss">
.nav {
  background-color: rgb(83, 83, 83);
  display: flex;
  justify-content: space-between;
  min-height: 90px;

  &__wrapper {
    width: 1000px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding-top: 10px;
  }

  &__left--wrapper {
    width: 270px;
    display: flex;
    justify-content: space-between;
  }

  &__home--link {
    text-decoration: none;
    margin-left: 20px;
    font-size: 30px;
    font-weight: bold;
    color: rgb(221, 221, 220);
  }

  &__button {
    width: 120px;
    height: 50px;
    margin-top: 10px;
    border-radius: 10px;
  }
}
</style>
