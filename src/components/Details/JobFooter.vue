<template>
  <section class="job-footer">
    <div class="job-footer-section">
      <div class="job-footer-text">
        <h3>{{ job.position }}</h3>
        <p>{{ job.company }}</p>
      </div>
      <a :href="job.apply" class="btn-primary">Apply Now</a>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps(["job"]);
const job = ref(props.job);
</script>

<style lang="scss" scoped>
.job-footer {
  width: calc(100% + 78px);
  margin-left: -39px;
  background-color: rgb(25, 32, 45);
  height: 96px;
  display: flex;
  align-items: center;
  transition: background-color 0.3s ease 0s;

  @media (max-width: 767px) {
    height: 100%;
    padding: 20px 0;
    width: 100%;
    margin: 0;
  }

  .job-footer-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 730px;
    width: 100%;
    margin: 0px auto;

    @media (max-width: 767px) {
      flex-direction: column;
    }

    .job-footer-text {
      h3 {
        font-size: var(--font-size-heading-m);
        color: rgb(255, 255, 255);
        margin-bottom: 8px;
      }

      p {
        color: rgb(110, 128, 152);
      }

      @media (max-width: 767px) {
        display: none;
      }
    }

    .btn-primary {
      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: 767px) {
        width: 100%;
        max-width: 90%;
        margin: 0;
      }
    }
  }
}
</style>