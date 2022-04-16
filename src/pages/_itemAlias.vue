<template>
  <div class="wrapper-person">
    <div v-if="item">
      <img :src="item.img" :alt="item.descr" />
      <h1 style="color: #ffffff" class="title">{{ item.title }}</h1>
      <p>{{ item.descr }}</p>
      <Stats :stats="item.info" />
    </div>
    <router-link to="/" class="btn btnWhite">Back to home</router-link>
  </div>
</template>

<script lang="js">
import items from '@/seeders/items.js'
import Stats from '@/components/UI/Stats.vue'


export default {
    data() {
        return {
            items: null
        };
    },
    created() {
        const alias = this.$route.params.itemAlias;
        const item = items.find(el => el.alias === alias);
        this.item = item;
    },
    components: { Stats }
}
</script>

<style lang="scss">
.wrapper-person {
  text-align: center;
  .card-stats {
    margin: 30px 0;
    border-radius: 14px;
  }
}
</style>
