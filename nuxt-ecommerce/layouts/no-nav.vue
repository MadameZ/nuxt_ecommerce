<template>
  <div class="no-nav-container">
    <div class="link">
      <li class="back-link">
        <NuxtLink to="/"><</NuxtLink>
      </li>
      <p class="text-link">Go back</p>
    </div>

    <Nuxt />
  </div>
</template>

<style>
.no-nav-container {
  margin: 20px;
}
.link {
  display: flex;
}
.back-link {
  list-style: none;
  margin-right: 10px;
  background-color: rgb(158, 158, 158);
  padding: 10px;
  border-radius: 0.2rem;
  cursor: pointer;
}
.back-link a {
  text-decoration: none;
  color: white;
}
.text-link {
  margin-top: 10px;
}

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}
.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}
.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}
.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>

---------------------------------------- Utilisation dans le composant
my-items.vue : ...

<script>
export default {
  // pour ne pas suivre le layout default.vue :
  layout: "no-nav",
};
</script>
