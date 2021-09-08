<template>
  <div class="main-container">
    <Nav />
    <div class="content">
      <Nuxt />
    </div>
  </div>
</template>

<style>
.main-container {
  background: linear-gradient(#f5f4f4, #dbdbdb);
}
.content {
  margin: 40px 100px;
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
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
