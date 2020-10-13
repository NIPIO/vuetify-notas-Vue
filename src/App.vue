<template>
  <v-app>
    <MenuComponent></MenuComponent>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
<script>
import MenuComponent from '@/components/MenuComponent.vue'

export default {
  name: 'App',
  components: {
    MenuComponent
  }
}
</script>

