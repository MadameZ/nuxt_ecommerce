<template>
  <NuxtLink :to="`/products/${card.id}`" class="large-card">
    <img
      :src="require(`@/assets/images/${card.image || 'fe1.jpg'}`)"
      alt="fe"
      class="large-card__image"
    />
    <h3 class="large-card__header">{{ card.title }}</h3>
    <p class="large-card__snippet">{{ card.snippet }}</p>
  </NuxtLink>
</template>

<script>
// /products/${card.id} amène vers la page _id.vue et passe l'id en paramètre.
// Dans _id.vue, on affiche le product obtenu grâce au getter:
//   computed: {
//   product() {
//     return this.$store.getters.getProductById(this.$route.params.id);
//   },
// },
// || : si ça n'existe pas

export default {
  props: ["card"],
};
</script>

<style lang="scss" scoped>
.large-card {
  width: 31.5%;
  height: 25rem;
  border: none;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  text-decoration: none;
  color: rgb(82, 82, 82);
  &__image {
    width: 90%;
    height: 60%;
    margin-bottom: 10px;
    box-shadow: 5px 5px 3px lightgray;
  }
  &__header {
    font-size: 1rem;
    margin-bottom: 10px;
  }
}
</style>
