<template>
  <v-app id="inspire">
    <Menu></Menu>
    
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import Menu from './components/menu/menu';
  import Users from './components/users/users';
  

  export default {
    name: 'ONE',
    components: {
      Menu
    },
    data: () => ({
      
    })
  }
</script>