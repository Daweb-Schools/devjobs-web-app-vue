<template>
  <div class="job-item">
    <div
      class="job-item-icon"
      :style="`background-color: ${job.logoBackground}`"
    >
      <img :src="`/src${job.logo}`" :alt="`${job.comapny} logo`" />
    </div>
    <div class="job-item-info">
      <p>
        <span>{{ job.postedAt }}</span
        ><span>•</span><span>{{ job.contract }}</span>
      </p>
      <RouterLink
        class="details-link"
        :to="{ name: 'details', params: { id: job.id } }"
      >
        {{ job.position }}
      </RouterLink>
      <p>{{ job.company }}</p>
    </div>
    <h3>{{ job.location }}</h3>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps(["job"]);
const job = ref(props.job);
</script>

<style lang="scss" scoped>
.job-item {
  width: 100%;
  background-color: rgb(25, 32, 45);
  border-radius: 6px;
  padding: 32px;

  .job-item-icon {
    width: 50px;
    height: 50px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -57px;
  }

  .job-item-info {
    margin-top: 22px;

    p {
      color: rgb(110, 128, 152);
      display: flex;
      gap: 12px;

      &:nth-of-type(1) {
        margin-bottom: 18px;
      }
    }

    .details-link {
      color: rgb(255, 255, 255);
      font-size: var(--font-size-heading-m);
      margin-bottom: 12px;
      cursor: pointer;
      text-decoration: none;
    }
  }
  h3 {
    color: var(--color-violet);
    font-size: var(--font-size-heading-s);
    margin-top: 46px;
  }
}
</style>