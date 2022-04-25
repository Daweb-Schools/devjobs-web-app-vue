<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "@/components/Header.vue";
</script>

<template>
  <Header />

  <RouterView />
</template>

<style lang="scss">
@import "@/assets/base.css";
.btn-primary {
  margin-left: 26px;
  color: rgb(255, 255, 255);
  background-color: var(--color-violet);
  border: none;
  height: 48px;
  border-radius: 5px;
  cursor: pointer;
  font-family: inherit;
  font-weight: 700;
  padding: 16px 0px;
  max-width: 148px;
  width: 100%;

  &:disabled {
    background-color: var(--color-light-violet);
    pointer-events: none;
  }

  &:hover {
    background-color: var(--color-light-violet);
  }
}
</style>
