 <template>
  <div id="app">
    <Nav class="mb-6" />
    <router-view />
  </div>
</template>

  <script>
import Nav from "./components/Nav.vue";

export default {
  name: "App",
  components: {
    Nav
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>