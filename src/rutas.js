import HelloWorld from './components/HelloWorld.vue'
import ComponenteDos from './components/ComponenteDos.vue'
import ComponenteTres from './components/ComponenteTres.vue'

export const rutas = [
  {path: '', component: HelloWorld},
  {path: '/rutaDos', component: ComponenteDos},
  {path: '/rutaTres/:id', component: ComponenteTres}
];