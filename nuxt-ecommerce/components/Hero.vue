<template>
  <div class="hero-container">
    <div class="hero-container__text-container">
      <h1 class="hero-container__header">Trouvez-votre extincteur</h1>
      <p class="hero-container__snippet">
        Lorem ipsum dolor sit amet consectetur.
      </p>
      <button class="hero-container__btn">Start looking</button>
    </div>
    <img
      src="~/assets/svg/fire-extinguisher.svg"
      alt=""
      class="hero-container__image"
    />
  </div>
</template>

<script>
// github : https://github.com/harblaith7/Nuxt-Crash-Course

export default {};
</script>

<style lang="scss" scoped>
.hero-container {
  display: flex;
  height: 30vh;
  margin-bottom: 50px;

  &__text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60%;
  }
  &__image {
    width: 150px;
    // margin-left: 2rem;
  }
  &__header {
    font-weight: 900;
    font-size: 2.8rem;
    margin-bottom: 10px;
  }
  &__snippet {
    color: grey;
    font-size: 1.25rem;
    margin-bottom: 20px;
  }
  &__btn {
    background-color: orange;
    padding: 10px;
    border-radius: 100rem;
    color: white;
    width: 20rem;
    border: none;
    cursor: pointer;
    &:hover {
      background-color: rgb(253, 189, 70);
    }
  }
}
</style>
