// Import de createRouter à partir de Vue Router
import { createRouter, createWebHistory } from 'vue-router';
import Questionnaire from './components/Questionnaire.vue';
import ModificationPage from './components/ModificationPage.vue';

// Création du routeur
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Questionnaire
    },
    {
      path: '/modification/:questionId',
      component: ModificationPage,
      props: true
    },
    // Route pour gérer les URL inconnues (404)
    {
      path: '/:pathMatch(.*)', // Utilisation d'une expression régulière personnalisée
      redirect: '/home'
    }
  ]
});

export default router;
