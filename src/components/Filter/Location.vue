<template>
  <div class="location filter-item">
    <LocationIcon />
    <input
      class="search-input"
      type="text"
      placeholder="Filter By location..."
      v-model="location"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import LocationIcon from "../icons/LocationIcon.vue";

const location = ref("");
</script>

<style lang="scss" scoped>
.location {
  max-width: 300px;
  width: 100%;
  min-width: 230px;

  @media (max-width: 950px) {
    min-width: 220px;
  }
  @media (max-width: 767px) {
    min-width: 140px;
    padding: 0px;
  }
}
</style>