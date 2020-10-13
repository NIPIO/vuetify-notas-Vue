
<template>
  <v-app-bar app dark dense >
        <v-menu open-on-hover top offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-app-bar-nav-icon color="primary" dark v-bind="attrs" v-on="on"></v-app-bar-nav-icon>
          </template>
          <template v-for="item in items">
            <v-list>
              <v-list-item link :to="{name: item.name}">
              <!-- <v-list-item link @click="$router.push({ path: item.path }).catch(err => {})"> -->
               <!-- el catch es para que no tire error cuando hago click en la ruta que ya estoy parado.-->
                {{item.name}}
              </v-list-item>
            </v-list>
          </template>
        </v-menu>
        <v-spacer></v-spacer>
        <v-btn class="primary">Ingreso</v-btn>
        <v-btn class="info">Salir</v-btn>
  </v-app-bar>
</template>
<script>
  export default {
  name: 'Menu',
  created() {
      this.$router.options.routes.forEach(route => {
          this.items.push({
              name: route.name, 
              path: route.path
          })
      })
  },
  data() {
      return {
          items: []
      }
  }
};
</script>
