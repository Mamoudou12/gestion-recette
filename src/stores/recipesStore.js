import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useRecipesStore = defineStore('recipes', () => {
  const recipes = ref([])

  function addRecipe(recipe) {
    recipes.value.push(recipe)
  }

  function updateRecipe(index, updatedRecipe) {
    recipes.value[index] = updatedRecipe
  }

  function deleteRecipe(index) {
    recipes.value.splice(index, 1)
  }

  return { recipes, addRecipe, updateRecipe, deleteRecipe }
})
