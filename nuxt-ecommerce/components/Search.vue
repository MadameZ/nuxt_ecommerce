<template>
  <div class="search">
    <input
      type="text"
      class="search__input"
      v-model="letters"
      @keyup="filter"
    />
    <button class="search__btn">Search</button>
    <div v-for="p in products" :key="p.id"></div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      letters: "",
      productsCopy: [],
      productFiltered: [],
    };
  },
  computed: {
    ...mapState(["products"]),
  },
  methods: {
    ...mapActions(["getProducts"]),

    filter() {
      if (this.letters.length == 0) {
        this.productsCopy.length = 0;
        this.productFiltered.length = 0;
        console.log("if:", this.productFiltered.length);
        console.log("search:", this.productFiltered);
      } else {
        this.productsCopy = [...this.products];
        this.productFiltered = this.productsCopy.filter((p) =>
          p.title.toLocaleLowerCase().includes(this.letters.toLocaleLowerCase())
        );

        this.$emit("productFiltered", this.productFiltered);
        console.log("else:", this.productFiltered.length);
        console.log("search:", this.productFiltered);
      }
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style lang="scss">
.search {
  background-color: rgb(82, 82, 82);
  margin-bottom: 20px;
  padding: 10px;
  &__input {
    width: 30%;
    height: 30px;
    position: relative;
    border: none;
    padding: 0 10px;
    border-top-left-radius: 0.2rem;
    border-bottom-left-radius: 0.2rem;
    &:focus {
      outline: none;
    }
  }
  &__btn {
    background-color: orange;
    color: #ffff;
    border: none;
    height: 30px;
    cursor: pointer;
    position: absolute;
    border-top-right-radius: 0.2rem;
    border-bottom-right-radius: 0.2rem;
    &:hover {
      background-color: rgb(253, 189, 70);
    }
  }
}
</style>
