<template>
  <div class="filter">
    <input type="text" v-model="searchQuery" placeholder="Search..." />
    <ul>
      <li v-for="(item, index) in filteredList" :key="index">
        <span>{{ item }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  setup() {
    const searchQuery = ref("");
    const list = ref([
      "Nike",
      "Macey's",
      "KFC",
      "Starbucks",
      "Zara",
      "GAP",
      "Fashion And Friends",
      "Addidas",
    ]);

    const filteredList = computed(() => {
      return list.value.filter((item) => {
        return item.toLowerCase().includes(searchQuery.value.toLowerCase());
      });
    });

    return {
      searchQuery,
      filteredList,
    };
  },
};
</script>

<style lang="scss" scoped>
.filter {
  input {
    background-color: transparent;
    border: 1px solid $white; /* Adds a border to the input field */
    padding: 8px 12px; /* Adds padding to the input field */
    font-size: 15px; /* Sets the font size of the input field */
    border-radius: 4px; /* Adds rounded corners to the input field */
    color: $white;
    margin-bottom: 10px;
    transition: all 0.3s ease-out;

    &:focus {
      outline: none; /* Removes the default focus style */
      border-color: $purple; /* Changes the border color when the input field is focused */
    }
  }
  ul {
    list-style: none;
    background-color: #ffffff0f;
    border-radius: 4px;
    max-height: 115px;
    overflow-y: auto;
    li {
      padding-top: 5px;
      padding-bottom: 5px;
      padding-left: 10px;

      &:hover {
        background-color: $purple;
        padding-left: 5px;
        transition: background-color 0.2s, padding 0.2s;
        span {
          color: $white;
        }
      }
    }

    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-track {
      background: $white;
    }

    &::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
}
</style>
