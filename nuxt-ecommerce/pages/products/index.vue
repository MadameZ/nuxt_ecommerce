<template>
  <div class="container">
    <LargeCardDisplay
      v-for="cardInfo in largeCardSections.slice(0, 1)"
      :key="cardInfo.id"
      :cardsSection="cardInfo"
    />
    <SmallCardDisplay
      v-for="cardInfo in smallCardSections"
      :key="cardInfo.id"
      :cardsSmallSection="cardInfo"
    />
  </div>
</template>

<script>
// @ : root directory
// slice(0, 1) : récupération de l'élément à l'indice 0
// l'information pour id sera envoyée depuis NuxtLink des deux composants
import { largeCardSections, smallCardSections } from "@/assets/data.js";
export default {
  data() {
    return {
      largeCardSections: largeCardSections,
      smallCardSections: smallCardSections,
    };
  },
};
</script>

<style lang="scss"></style>
