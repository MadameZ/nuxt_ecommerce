<template>
  <div class="item-container">
    <img
      :src="require(`@/assets/images/${item.image}`)"
      alt=""
      class="item-container__image"
    />
    <div class="item-container__text-container">
      <h4 class="item-container__title">{{ item.title }}</h4>
      <p>{{ item.description }}</p>
    </div>
  </div>
</template>

<script>
// require(`@/assets/images/${item.image}`) est une manière d'importer une image sans ça il faudrait     import image from "./assets/logo.png" puis l'intégrer dans data
export default {
  props: ["item"],
};
</script>

<style lang="scss">
.item-container {
  display: flex;
  padding: 5px;
  height: 11rem;
  margin-bottom: 100px;
  border: 1px solid #eee;
  &__image {
    width: 17.5rem;
    border-radius: 1rem;
  }
  &__text-container {
    margin-left: 20px;
  }
  &__title {
    margin-bottom: 20px;
  }
}
</style>
