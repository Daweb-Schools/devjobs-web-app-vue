<script setup>
import Filter from "../components/Filter.vue";
import JobItem from "../components/JobItem.vue";
// import jobsData from "../assets/data.json";
import { useJobsStore } from "@/stores/index.js";
import { ref, computed, watch } from "vue";
const jobsStore = useJobsStore();
const jobs = ref(jobsStore.jobs);
const pageSize = ref(9);
const page = ref(1);

watch(jobsStore, async (newJobs, oldJobs) => {
  try {
    pageSize.value = 9;
    page.value = 1;
    jobs.value = newJobs.jobs;
  } catch (error) {
    console.log(error);
  }
});

const paginatedJobs = computed(() => {
  const start = (page.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return jobs.value.slice(start, end);
});

async function loadMore() {
  pageSize.value += 3;
}
</script>

<template>
  <main>
    <div class="contentWrapper">
      <Filter />
      <section class="jobs-section">
        <p v-if="paginatedJobs.length == 0">No jobs found.</p>
        <transition-group name="list-animation">
          <JobItem v-for="job in paginatedJobs" :key="job.id" :job="job" />
        </transition-group>
      </section>
      <button
        class="load-more btn-primary"
        type="button"
        @click="loadMore"
        :disabled="jobs.length <= pageSize"
      >
        Load More
      </button>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.contentWrapper {
  max-width: 1100px;
  width: 100%;
  position: relative;
  margin: 120px auto 0px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  .jobs-section {
    max-width: 11100px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 65px 30px;
    margin-top: 105px;
    margin-bottom: 56px;

    .list-animation-enter,
    .list-animation-leave-to {
      opacity: 0;
      transform: translateX(40px);
    }

    .list-animation-leave-active {
      position: absolute;
    }

    @media (max-width: 950px) {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 10px;
    }

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
      row-gap: 50px;
      max-width: 500px;
      width: 100%;
      margin: 57px auto 32px;
    }
  }

  .load-more {
    margin-bottom: 100px;
  }
}
</style>
