<template>
  <v-row>
    <div>
      <v-breadcrumbs>
        <v-breadcrumbs-item v-for="(pagina, index) in paginas" :key="index">
          <router-link :to="{ name: pagina.href }">{{ pagina.text }}</router-link>
        </v-breadcrumbs-item>
      </v-breadcrumbs>
    </div>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      paginas: [
        {
          text: "Home",
          disabled: false,
          href: "home",
        },
        {
          text: "Random",
          disabled: false,
          href: "random",
        },
        {
          text: "Search",
          disabled: false,
          href: "search",
        }
      ],
    };
  },
};
</script>

<style scoped>
div {
  margin: auto;
}
</style>