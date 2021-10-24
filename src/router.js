import Vue from 'vue'
import Router from 'vue-router'
import Portada from './components/Portada.vue'
import Sobremi from './components/Sobremi.vue'
import Contacto from './components/Contacto.vue'
import Post from './components/Post.vue'
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
