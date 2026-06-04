<template>
  <div >
    <!-- O Menu fica fixo no topo da aplicação -->
     <!-- <MenuBar /> -->
   
    <!-- O conteúdo de cada página é renderizado dinamicamente aqui dentro -->    
     
      <RouterView />
   
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';

</script>

<style scoped>
/* Organização espacial baseada em CSS moderno para evitar que o conteúdo suma sob o menu */

</style>