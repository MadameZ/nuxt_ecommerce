<template>
  <div v-if="product" class="container py-5">
    <p>$route.params.id ==> {{ $route.params.id }}</p>

    <p>Récupéré depuis l'url (NuxtLink dans SmallCard ou LargeCard)</p>


    <div class="detail-container">
      <img
        :src="require(`@/assets/images/${product.image}`)"
        alt=""
        class="image"
      />


      <div class="info-box">
        <h1>{{ product.title }}</h1>
        <p class="snippet">{{ product.snippet }}</p>
        <RentModal
        :product="product"
        />
      </div>

    </div>


    <div class="description-container">
    <h6>Description</h6>
      <p>
        {{ product.description }}
      </p>
    </div>

    <Reviews />

  </div>

  <div v-else class="container padding">
    <PageNotFound />
  </div>
</template>

<script>
export default {
  computed: {
    product() {
      return this.$store.getters.getProductById(this.$route.params.id);
    },
  },
};
</script>

<style lang="scss">
.detail-container {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  background-color: #fff;

  .image {
    width: 50%;
    height: auto;
    margin: auto;
  }
  .info-box {
    border: 0.2px solid #eee;
    width: 39%;
    background-color: rgba(240, 240, 240, 0.322);
    padding: 1rem;

    h1 {
      font-size: 1.75rem;
    }
    .snippet {
      color: rgba(0, 0, 0, 0.774);
      margin-top: 1rem;
    }
  }
}
.whats-included-container {
    background-color: #fff;
    padding: 20px;
    margin-top: 20px;



  .included-container {

    margin-top: 1.5rem;
    h6 {
      font-size: 0.9rem;
      font-weight: 400;
    }
  }
}
.description-container {
background-color: #fff;
padding: 20px;
margin-top: 20px;
  border-bottom: 0.1rem solid rgba(128, 128, 128, 0.151);
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  h6 {
      font-size: 0.9rem;
      font-weight: 400;
    }
}
p {
  color: grey;
}
</style>
