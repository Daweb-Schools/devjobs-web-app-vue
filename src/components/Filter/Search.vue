<template>
  <div class="search filter-item">
    <SearhcIcon />

    <input
      class="search-input"
      type="text"
      placeholder="Filter by companies..."
      v-model="search"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup>
import SearhcIcon from "../icons/SearchIcon.vue";
import { ref, computed } from "vue";
const props = defineProps(["modelValue"]);

const search = ref(props.modelValue);
</script>

<style lang="scss" scoped>
.search {
  width: 100%;
  min-width: 330px;
  padding-left: 16px;

  @media (max-width: 950px) {
    min-width: 220px;
  }
  @media (max-width: 767px) {
    min-width: 140px;
    padding: 0px;
  }
}
</style>