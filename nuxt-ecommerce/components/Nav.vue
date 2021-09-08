<template>
  <div class="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <NuxtLink to="/" class="nav__title nav__link">Firengli</NuxtLink>
      </li>
      <li class="nav__item">
        <NuxtLink to="/products" class="nav__link">Produits</NuxtLink>
      </li>
      <li class="nav__item">
        <NuxtLink to="/my-items" class="nav__link"
          >Panier: {{ myRentals.length }}</NuxtLink
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["myRentals"]),
  },
};
</script>

<style lang="scss">
.nav {
  background-color: rgb(31, 31, 31);
  padding: 5px;
  display: flex;
  height: 51px;
  box-shadow: 0px 5px 8px rgb(160, 160, 160);
  &__list {
    display: flex;
    list-style: none;
  }
  &__item {
    line-height: 40px;
    margin: 0 40px 0 0;
  }
  &__title {
    color: rgb(172, 172, 172);
    font-weight: 700;
    font-size: 1.3rem;
  }
  &__link {
    text-decoration: none;
    color: #ffffff;
    &:hover {
      color: rgb(248, 195, 97);
    }
  }
}
</style>
