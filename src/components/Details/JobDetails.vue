<template>
  <section class="job-info">
    <div class="job-info-section">
      <div class="job-info-details">
        <p>
          <span>{{ job.postedAt }}</span
          ><span>•</span><span>{{ job.contract }}</span>
        </p>
        <h1>{{ job.position }}</h1>
        <h3>{{ job.location }}</h3>
      </div>
      <a :href="job.apply" class="btn-primary">Apply Now</a>
    </div>
    <div class="job-info-description">
      <p>
        {{ job.description }}
      </p>
      <h3>Requirements</h3>
      <p>
        {{ job.requirements.content }}
      </p>
      <ul>
        <li v-for="(item, index) in job.requirements.items" :key="index">
          {{ item }}
        </li>
      </ul>
      <h3>What You Will Do</h3>
      <p>
        {{ job.role.content }}
      </p>
      <ol>
        <li v-for="(item, index) in job.role.items" :key="index">
          {{ item }}
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps(["job"]);
const job = ref(props.job);
</script>


<style lang="scss" scoped>
.job-info {
  background-color: rgb(25, 32, 45);
  padding: 46px 48px;
  max-width: 730px;
  width: 100%;
  margin: 32px auto 80px;
  border-radius: 6px;

  .job-info-section {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;

    .job-info-details {
      p {
        color: rgb(110, 128, 152);
        display: flex;
        gap: 12px;
        margin-bottom: 11px;
      }

      h1 {
        font-size: var(--font-size-heading-xl);
        color: rgb(255, 255, 255);
        margin-bottom: 7px;
      }

      h3 {
        font-size: var(--font-size-heading-s);
        color: var(--color-violet);
      }
    }
    .btn-primary {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .job-info-description {
    margin-top: 46px;

    p {
      color: rgb(110, 128, 152);
      margin-bottom: 24px;

      &:nth-of-type(1) {
        margin-bottom: 40px;
      }
    }

    h3 {
      font-size: var(--font-size-heading-m);
      color: rgb(255, 255, 255);
      margin-bottom: 28px;
    }

    ul {
      margin-bottom: 48px;
    }

    ul,
    ol {
      color: rgb(110, 128, 152);
      margin-inline-start: 16px;
    }

    ol {
      list-style: none;
      margin-left: 0px;

      li {
        position: relative;
        counter-increment: custom 1;
        padding-left: 38px;

        &:first-child {
          counter-reset: custom 0;
        }

        &::before {
          position: absolute;
          left: 0px;
          content: counter(custom) " ";
          color: var(--color-violet);
          font-weight: 700;
        }
      }
    }

    li {
      padding-left: 24px;
      margin-block-start: 10px;
      line-height: var(--line-height-body);

      &::marker {
        color: var(--color-violet);
        font-weight: 700;
      }
    }
  }
}
</style>