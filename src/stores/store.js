import { defineStore } from "pinia";

export const useStore = defineStore({
  id: "store",
  state: () => ({
    stores: [],
  }),
  actions: {
    async fetchStores() {
      const response = await fetch("/path/to/store.json");
      const data = await response.json();
      this.stores = data;
    },
  },
  getters: {
    getStoreById: (state) => (id) => {
      return state.stores.find((store) => store.id === id);
    },
  },
});
