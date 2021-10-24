import Vue from 'vue'
import Router from 'vue-router'
const Portada = ()=> Promise.resolve(import('./components/Portada.vue'))
const Sobremi = ()=> Promise.resolve(import('./components/Sobremi.vue'))
const Contacto = ()=> Promise.resolve(import('./components/Contacto.vue'))
const Post = ()=> Promise.resolve(import('./components/Post.vue'))
import Articulo from './components/Articulo.vue'
import NotFound from './components/NotFound.vue'

Vue.use(Router);

export default new Router(
  {
    mode: 'history',
    routes:[
      {
        path: '/',
        component: Portada,
      },
      {
        path: '/sobremi',
        component: Sobremi,
      },
      {
        path: '/contacto',
        component: Contacto,
      },
      {
        path: '/post/:entrada',
        component: Post,
        children:[
          {
            path: 'articulo',
            component: Articulo,
            name: 'articulo',
          },
        ],
      },
      {
        path: '*',
        component: NotFound,
      },

    ],
  }
);
