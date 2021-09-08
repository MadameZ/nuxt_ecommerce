<template>
  <div class="page-container">
    <Hero />
    <Search @productFiltered="handleFiltered" />

    <div v-if="filtered">
      <LargeCardDisplay
        v-for="(cardInfo, index) in filtered"
        :key="index"
        :cardsSection="cardInfo"
      />
    </div>

    <LargeCardDisplay
      v-for="(cardInfo, index) in largeCardInfos"
      :key="index"
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
// https://www.youtube.com/watch?v=Wdmi4k7sFzU
// https://github.com/harblaith7/Nuxt-Crash-Course/tree/main/Client
//
// index.js -> est l'équivalant à notre home page
import { largeCardSections, smallCardSections } from "@/assets/data.js";
export default {
  data() {
    return {
      largeCardInfos: largeCardSections,
      smallCardSections: smallCardSections,
      filtered: [],
    };
  },
  methods: {
    handleFiltered(products) {
      this.filtered = products;
      if (this.filtered.length == 0) {
        console.log("oohhh c'est zzéro");
      }
      console.log("this.filtered :", this.filtered);
    },
  },
};
</script>
<style lang="scss"></style>
