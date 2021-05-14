<template>
  <Frame />
</template>

<script>
import Frame from "./views/Frame.vue";
export default {
  name: "App",
  components: {
    Frame,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  margin: 0;
}
</style>
