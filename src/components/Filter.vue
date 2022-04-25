<template>
  <form class="filterSection">
    <Search v-model="searchValue" />
    <Location v-model="locationValue" />
    <FullTime v-model="isFullTimeValue" />
    <button @click="search" class="btn-primary search-btn" type="button">
      Search
    </button>
  </form>
</template>

<script setup>
import Search from "./Filter/Search.vue";
import Location from "./Filter/Location.vue";
import FullTime from "./Filter/FullTime.vue";

import { useFilterStore } from "@/stores/index.js";
import { ref } from "vue";

const filter = useFilterStore();
const searchValue = ref(filter.search);
const locationValue = ref(filter.location);
const isFullTimeValue = ref(filter.isFullTime);

async function search() {
  filter.setFilter({
    search: searchValue.value,
    location: locationValue.value,
    isFullTime: isFullTimeValue.value,
  });
}
</script>

<style lang="scss">
.filterSection {
  width: 100%;
  height: 80px;
  border-radius: 6px;
  background-color: rgb(25, 32, 45);
  padding: 0px 15px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  transition: background-color 0.3s ease 0s;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .filter-item {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 16px;
    height: 100%;
    padding: 23px;
    border-right: 1px solid rgba(110, 128, 152, 0.2);

    @media (max-width: 767px) {
      border-right: none;
    }

    .search-input {
      border: none;
      font-family: inherit;
      font-size: inherit;
      background-color: transparent;
      color: rgb(255, 255, 255);
      cursor: pointer;
      height: 100%;
      width: 100%;
      outline: none;
    }
  }

  .search-btn {
    max-width: 100%;
    @media (max-width: 767px) {
      margin: 23px;
      display: block;
      // margin: 0;
      width: calc(100% - 46px);
    }
  }
}
</style>