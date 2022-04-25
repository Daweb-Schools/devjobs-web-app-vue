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
      this.search = filter.search;
      this.location = filter.location;
      this.isFullTime = filter.isFullTime;
      useJobsStore().filterJobs(filter);
    },
  },
});

export const useJobsStore = defineStore({
  id: "jobs",
  state: () => ({
    jobs: [],
    job: null,
  }),
  getters: {
    getJobs: (state) => state.jobs,
  },
  actions: {
    async fetchJobs() {
      await fetch("http://localhost:4000/data")
        .then((res) => res.json())
        .then((data) => {
          this.jobs = data;
        });
    },
    async filterJobs(filter) {
      await this.fetchJobs();

      var filteredJobs = this.jobs;
      filteredJobs = this.jobs.filter((job) => {
        if (filter.search && filter.search !== "") {
          if (
            job.description.toLowerCase().includes(filter.search.toLowerCase())
          ) {
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
        if (filter.isFullTime) {
          if (job.contract === "Full Time") {
            return true;
          }
        } else {
          return true;
        }
      });

      this.jobs = filteredJobs;
    },
    async getJob(id) {
      this.job = this.jobs.find((job) => job.id === parseInt(id));
    },
  },
});
