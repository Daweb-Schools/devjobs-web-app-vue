<template>
  <section class="details-header">
    <div
      class="details-header-icon"
      :style="`background-color: ${job.logoBackground}`"
    >
      <img :src="`/src${job.logo}`" :alt="`${job.comapny} logo`" />
    </div>
    <div class="details-header-text">
      <h2>{{ job.company }}</h2>
      <p>{{ job.company.toLocaleLowerCase() }}.com</p>
    </div>
    <a class="btn-secondary" :href="job.website">Company Site</a>
  </section>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps(["job"]);
const job = ref(props.job);
</script>

<style lang="scss" scoped>
.details-header {
  position: relative;
  max-width: 730px;
  width: 100%;
  margin: 120px auto 0px;
  padding-right: 43px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  z-index: 1;
  background-color: rgb(25, 32, 45);
  border-radius: 6px;

  .details-header-icon {
    height: 140px;
    width: 140px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    border-bottom-left-radius: 6px;
    border-top-left-radius: 6px;

    img {
      width: 58%;
    }
  }

  .details-header-text {
    margin-left: 40px;

    h2 {
      color: rgb(255, 255, 255);
      font-size: var(--font-size-heading-l);
      margin-bottom: 10px;
      font-weight: 600;
    }

    p {
      color: rgb(110, 128, 152);
    }
  }

  .btn-secondary {
    margin-left: auto;
  }
}
</style>