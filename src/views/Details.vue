<template >
  <JobHeader :job="job" />
  <JobDetails :job="job" />
  <JobFooter :job="job" />
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";
import JobHeader from "../components/Details/JobHeader.vue";
import JobDetails from "../components/Details/JobDetails.vue";
import JobFooter from "../components/Details/JobFooter.vue";
import { useJobsStore } from "@/stores/index.js";
const jobsStore = useJobsStore();

const route = useRoute();
const id = ref(route.params.id);

jobsStore.getJob(id.value);
const job = ref(null);
if (jobsStore.job) {
  job.value = jobsStore.job;
}
</script>

<style>
</style>
