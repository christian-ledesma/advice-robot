<template>
  <v-app>
    <!-- AQUI EMPIEZA EL HEADER -->
    <v-app-bar app color="grey lighten-3" dense elevate-on-scroll>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Reboot Advise</v-toolbar-title>

      <v-spacer></v-spacer>

      <router-link :to="{ name: 'random' }">
        <v-btn icon>
          <v-icon>mdi-autorenew</v-icon>
        </v-btn>
      </router-link>

      <router-link :to="{ name: 'search' }">
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </router-link>
    </v-app-bar>
    <!-- AQUI TERMINA EL HEADER -->

    <!-- CONTENIDO PRINCIPAL -->
    <v-main>
      <v-container fluid>
        <nav-bar />
        <router-view></router-view>
      </v-container>
    </v-main>
    <!-- FIN DEL CONTENIDO PRINCIPAL -->

    <!-- FOOTER -->
    <v-footer app padless>
      <v-card class="flex" flat tile color="grey darken-2">
        <v-card-title>
          <strong class="subheading">Copyright!</strong>

          <v-spacer></v-spacer>

          <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-title>
      </v-card>
    </v-footer>
    <!-- FIN DEL FOOTER -->
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "App",
  components: {
    NavBar,
  },
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>
