<template>
  <div class="card-stats">
    <div v-for="(stat, index) in stats" :key="index" class="one-third">
      <div class="stat-value">{{ stat.title }}</div>
      <div class="stat">{{ stat.value }}</div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Stats",
  props: {
    stats: {
      type: Object,
      require: true,
    },
  },
};
</script>

<style lang=""></style>