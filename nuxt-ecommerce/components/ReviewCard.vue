<template>
  <div class="review-card">
    <img :src="review.picture.large" alt="" class="review-card__image" />

    <div class="review-card__text-container">
      <h6>{{ review.login.username }}</h6>
      <p class="review-card__description">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
        quam magni beatae possimus debitis.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["review"],
};
</script>

<style lang="scss" scoped>
.review-card {
  margin-top: 1.5rem;
  height: 4rem;
  display: flex;
  &__text-container {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  &__image {
    width: 4rem;
    height: 4rem;
    border-radius: 100%;
  }
  &__description {
    color: grey;
    font-size: 0.7rem;
  }
}
</style>
