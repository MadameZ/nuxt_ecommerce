<template>
  <div class="small-card">
    <nuxt-link :to="`/products/${card.id}`">
      <img
        class="small-card__image"
        :src="require(`@/assets/images/${card.image || 'fe1.jpg'}`)"
        alt=""
      />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["card"],
};
</script>

<style lang="scss">
.small-card {
  width: 19%;
  height: auto;
  border-radius: 0.5rem;
  overflow: hidden;
  margin: 20px;
  box-shadow: 2px 5px 5px rgb(212, 212, 212);

  cursor: pointer;
  &__image {
    width: 100%;
    height: 100%;
  }
}
</style>
