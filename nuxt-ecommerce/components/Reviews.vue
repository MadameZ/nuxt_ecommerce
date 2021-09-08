<template>
  <div class="review-container">
    <h3 class="review-container__title">Customer Reviews</h3>
    <!--{{ $fetchState }}-->
    <br />

    <div v-if="!$fetchState.pending">
      <!--{{ reviewers }}-->
      <ReviewCard
        v-for="reviewer in reviewers.results"
        :key="reviewer.login.uuid"
        :review="reviewer"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reviewers: [],
    };
  },
  async fetch() {
    this.reviewers = await fetch(
      "https://randomuser.me/api/?results=5"
    ).then((res) => res.json());
  },
};
</script>

<style lang="scss">
.review-container {
  background-color: #fff;
  padding: 30px;
  &__title {
    padding-bottom: 10px;
    border-bottom: 0.1rem solid black;
  }
}
</style>
