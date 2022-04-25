<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "@/components/Header.vue";

import { useJobsStore } from "@/stores/index.js";
const jobsStore = useJobsStore();
jobsStore.fetchJobs();
</script>

<template>
  <Header />

  <main>
    <RouterView />
  </main>
</template>

<style lang="scss">
@import "@/assets/base.css";
main {
  max-width: 1440px;
  width: 100%;
  margin: 0px auto;
  height: fit-content;
  background-color: transparent;
}
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
  text-decoration: none;

  &:disabled {
    background-color: var(--color-light-violet);
    pointer-events: none;
  }

  &:hover {
    background-color: var(--color-light-violet);
  }
}

.btn-secondary {
  height: 48px;
  border: none;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
  padding: 0px 20px;
  font-family: inherit;
  color: rgb(255, 255, 255);
  font-weight: 700;
  text-decoration: none;
  border-radius: 5px;
  max-width: 148px;
}
</style>
