<template>
  <div class="small-cards-container">
    <h3 class="small-cards-container__header">{{ cardsSmallSection.title }}</h3>
    <div class="small-cards-content">
      <SmallCard
        v-for="card in cardsSmallSection.cards"
        :key="card.id"
        :card="card"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["cardsSmallSection"],
};
</script>

<style lang="scss">
.small-cards-container {
  margin-bottom: 70px;
  &__header {
    margin-bottom: 20px;
  }
  .small-cards-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    &::after {
      margin-top: 50px;
      background-color: rgb(185, 185, 185);
      box-shadow: 2px 2px 5px rgb(148, 148, 148);
      content: "";
      height: 0.2px;
      width: 100vw;
    }
  }
}
</style>
