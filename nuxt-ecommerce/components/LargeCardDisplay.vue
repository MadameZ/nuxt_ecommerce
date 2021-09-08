<template>
  <div class="large-cards-container">
    <h4 class="large-cards-container__header">{{ cardsSection.title }}</h4>
    <p class="large-cards-container__snippet">{{ cardsSection.snippet }}</p>
    <div class="large-cards-content">
      <LargeCard
        v-for="card in cardsSection.cards"
        :key="card.id"
        :card="card"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["cardsSection"],
};
</script>

<style lang="scss">
.large-cards-container {
  background-color: #ffff;
  padding: 20px;
  margin-bottom: 40px;
  &__header {
    margin-bottom: 10px;
    font-size: 1.5rem;
  }
  &__snippet {
    margin-bottom: 20px;
  }
  .large-cards-content {
    display: flex;
    justify-content: space-between;
  }
}
</style>
