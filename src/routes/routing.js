import Tierra from  '../components/Informativos/Tierra'
import Sol from  '../components/Informativos/Sol'
import Sistema from  '../components/Informativos/Sistema'
import Universo from  '../components/Informativos/Universo'
import Marte from  '../components/Informativos/Marte'
import Rover from  '../components/Informativos/Rover'
import Descarga from  '../components/Informativos/Descarga.js'
import Recortes from  '../components/Informativos/Recortes'
import Glosario from  '../components/Informativos/Glosario'
import Videos from  '../components/Informativos/videos'
import Starter from  '../components/inicial'
import TooltipComponent from  '../components/juego'




var ThemeRoutes = [
  { 
    path: '/dashboard', 
    name: 'Inicio', 
    icon: 'ti-loop', 
    component: Starter 
  },
  {
    path: '/tierra',
    name: 'Tierra',
    icon: 'mdi mdi-comment-processing-outline',
    component: Tierra
  },
  {
    path: '/Sol',
    name: 'Sol',
    icon: 'mdi mdi-comment-processing-outline',
    component: Sol
  },
  {
    path: '/Universo',
    name: 'Universo',
    icon: 'mdi mdi-comment-processing-outline',
    component: Universo
  },
  {
    path: '/Sistema',
    name: 'Sistema',
    icon: 'mdi mdi-comment-processing-outline',
    component: Sistema
  },
  {
    path: '/marte',
    name: 'Marte',
    icon: 'mdi mdi-comment-processing-outline',
    component: Marte
  },
  {
    path: '/rover',
    name: 'Rover',
    icon: 'mdi mdi-comment-processing-outline',
    component: Rover
  },
  {
    path: '/color',
    name: 'Descargar y colorea',
    icon: 'mdi mdi-comment-processing-outline',
    component: Descarga
  },
  {
    path: '/tijeras',
    name: 'Recorte',
    icon: 'mdi mdi-comment-processing-outline',
    component: Recortes
  },
  {
    path: '/glosario',
    name: 'Glosario',
    icon: 'mdi mdi-comment-processing-outline',
    component: Glosario
  },
  {
    path: '/videos',
    name: 'Videos',
    icon: 'mdi mdi-comment-processing-outline',
    component: Videos
  }, 
  {
    path: '/juego',
    name: 'Adivina tu planeta',
    icon: 'mdi mdi-image-filter-vintage',
    component: TooltipComponent
  },
  { path: '/', pathTo: '/dashboard', name: 'Dashboard', redirect: true }
];
export default ThemeRoutes;
