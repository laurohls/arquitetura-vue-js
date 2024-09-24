import { createMemoryHistory, createRouter } from 'vue-router';

import RoutesModulePessoa from '../views/modules/pessoas/routes';
import Home from '../views/shared/home/index.vue';


const routes = [
  { path: '/', component: Home },
  ... RoutesModulePessoa
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router