import { defineStore, createPinia, setActivePinia } from "pinia";
const pinia = createPinia();
export default { store: setActivePinia(pinia) };


export const useMyMovieStore = defineStore('movie', () => {
const isHorizontalList = ref<boolean>(false);
const searchMovieName = ref("");



return {
  isHorizontalList,
  searchMovieName,
}
})
