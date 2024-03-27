// Import de createApp à partir de Vue
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Création de l'application Vue
const app = createApp(App);

// Utilisation du routeur
app.use(router);

// Montage de l'application dans l'élément #app dans votre HTML
app.mount('#app');
