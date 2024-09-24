
import PessoasListarModule from './pages/listar/index.vue';
import PessoasNovoModule from './pages/novo/index.vue';


const routesModule = [
  { path: '/pessoas', component: PessoasListarModule },
  { path: '/pessoa-novo', component: PessoasNovoModule },

]



export default routesModule;