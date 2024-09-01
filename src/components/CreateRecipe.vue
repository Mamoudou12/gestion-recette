<template>
    <div class="container mt-4">
      <h2>{{ isEditing ? 'Modifier' : 'Ajouter' }} une recette</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="title" class="form-label">Titre</label>
          <input v-model="form.title" type="text" id="title" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="ingredients" class="form-label">Ingrédients</label>
          <textarea v-model="form.ingredients" id="ingredients" class="form-control" rows="4" required></textarea>
        </div>
        <div class="mb-3">
          <label for="type" class="form-label">Type de recette</label>
          <select v-model="form.type" id="type" class="form-select" required>
            <option value="entrée">Entrée</option>
            <option value="plat">Plat</option>
            <option value="dessert">Dessert</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary">{{ isEditing ? 'Mettre à jour' : 'Ajouter' }}</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { useRecipesStore } from '../stores/recipesStore'
  import { useRoute, useRouter } from 'vue-router'
  
  const route = useRoute()
  const router = useRouter()
  const store = useRecipesStore()
  
  const isEditing = computed(() => !!route.params.id)
  const form = ref({
    title: '',
    ingredients: '',
    type: 'entrée'
  })
  
  if (isEditing.value) {
    const recipe = store.recipes[route.params.id]
    form.value = { ...recipe }
  }
  
  function submitForm() {
    if (isEditing.value) {
      store.updateRecipe(route.params.id, form.value)
    } else {
      store.addRecipe(form.value)
    }
    router.push('/')
  }
  </script>
  