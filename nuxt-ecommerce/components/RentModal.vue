<template>
  <div class="calendar-container">
    <div class="calendar-container__text-container">
      <p>Lorem ipsum dolor sit.</p>
    </div>

    <vc-calendar :value="null" color="indigo" is-dark is-range />
    <button @click="addItem(product.id)" class="calendar-container__btn">
      Ajouter au panier
    </button>
  </div>
</template>

<script>
// Installation de vcalendar :https://vcalendar.io/colors-dark-mode.html
import { mapState, mapMutations } from "vuex";
export default {
  props: ["product"],
  computed: {
    ...mapState(["myRentals"]),
  },
  methods: {
    ...mapMutations(["addItem"]),
  },
  mounted() {
    console.log("myRentals: ", this.myRentals);
  },
};
</script>

<style lang="scss">
.calendar-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  &__text-container {
    margin-bottom: 10px;
  }
  &__btn {
    margin-top: 20px;
    border: none;
    background-color: orange;
    padding: 10px 50px;
    border-radius: 1rem;
    cursor: pointer;
  }
}
</style>
