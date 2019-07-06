<template>
  <div class="recipe">
    이건 대고
     <Recipe msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Recipe from '@/components/Recipe.vue'
export default {
  name: 'recipe',
  components: {
    Recipe
  }

}
</script>
