//import { ref } from "vue";
import { defineStore } from "pinia";
import { useRoute } from "vue-router";

export const useInfoStore = defineStore("info", () => {
  const id = useRoute().params.id;
  function pullData() {
    fetch("/stores.json")
      .then((resp) => resp.json())
      .then((json) => console.log(json));
  }

  return { id, pullData };
});
