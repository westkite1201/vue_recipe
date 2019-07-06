<template>
     <Recipe msg="Welcome to Your Vue.js App"/>
</template>

<script>
// @ is an alias to /src
import Recipe from '@/components/Recipe.vue'
import ComponentTest from '@/components/ComponentTest.vue'
export default {
  name: 'recipe',
  components: {
    Recipe,
    ComponentTest
  }

}
</script>
