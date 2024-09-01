import { createRouter, createWebHistory } from 'vue-router'
import RecipeList from '../components/RecipeList.vue'
import CreateRecipe from '../components/CreateRecipe.vue'

const routes = [
  { path: '/', name: 'home', component: RecipeList },
  { path: '/add', name: 'add', component: CreateRecipe },
  { path: '/edit/:id', name: 'edit', component: CreateRecipe }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
