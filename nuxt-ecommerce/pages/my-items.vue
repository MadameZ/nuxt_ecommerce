<template>
  <div class="my-items-container">
    <h2>Mon panier</h2>
    <!--{{ myRentals }}-->
    <MyItem v-for="item in myRentals" :key="item.id" :item="item" />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  // pour ne pas suivre le layout default.vue :
  layout: "no-nav",
  computed: {
    ...mapState(["myRentals"]),
  },
};
</script>

<style lang="scss">
.my-items-container {
  margin: 80px;
  h2 {
    margin-bottom: 30px;
  }
}
</style>
