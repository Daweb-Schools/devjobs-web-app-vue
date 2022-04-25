import { defineStore } from "pinia";

export const useFilterStore = defineStore({
  id: "filter",
  state: () => ({
    search: "",
    location: "",
    isFullTime: false,
  }),
  getters: {},
  actions: {
    setFilter(filter) {
      this.filter = filter;
      useJobsStore().filterJobs(filter);
    },
  },
});

export const useJobsStore = defineStore({
  id: "jobs",
  state: () => ({
    jobs: [],
    loading: false,
  }),
  getters: {
    getJobs: (state) => state.jobs,
    getLoading: (state) => state.loading,
  },
  actions: {
    async fetchJobs() {
      this.loading = true;
      await fetch("http://localhost:4000/data")
        .then((res) => res.json())
        .then((data) => {
          this.jobs = data;
          this.loading = false;
        });
    },
    async filterJobs(filter) {
      this.loading = true;

      await this.fetchJobs();

      var filteredJobs = this.jobs;
      filteredJobs = this.jobs.filter((job) => {
        if (filter.search && filter.search !== "") {
          if (job.company.toLowerCase().includes(filter.search.toLowerCase())) {
            return true;
          }
        } else if (filter.search === "") {
          return true;
        } else {
          return false;
        }
      });

      filteredJobs = filteredJobs.filter((job) => {
        if (filter.location && filter.location !== "") {
          if (
            job.location.toLowerCase().includes(filter.location.toLowerCase())
          ) {
            return true;
          }
        } else if (filter.location === "") {
          return true;
        } else {
          return false;
        }
      });

      filteredJobs = filteredJobs.filter((job) => {
        if (filter.fullTime) {
          if (job.contract === "Full Time") {
            return true;
          }
        } else {
          return true;
        }
      });

      this.jobs = filteredJobs;
    },
  },
});
