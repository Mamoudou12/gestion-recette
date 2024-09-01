<template>
  <div class="container mt-4">
    <h2>Liste des recettes</h2>
    <ul class="list-group">
      <li v-for="(recipe, index) in recipes" :key="index" class="list-group-item d-flex justify-content-between align-items-center">
        <div>
          <h5>{{ recipe.title }}</h5>
          <p>{{ recipe.ingredients }}</p>
          <p><small>{{ recipe.type }}</small></p>
        </div>
        <div>
          <router-link :to="{ name: 'edit', params: { id: index } }" class="btn btn-warning btn-sm me-2">Modifier</router-link>
          <button @click="deleteRecipe(index)" class="btn btn-danger btn-sm">Supprimer</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRecipesStore } from '../stores/recipesStore'

const store = useRecipesStore()
const recipes = store.recipes

function deleteRecipe(index) {
  store.deleteRecipe(index)
}
</script>
