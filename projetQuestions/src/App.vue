<!-- App.vue -->

<template>
  <div id="app">
    <!-- Utilisation du composant Questionnaire -->
    <Questionnaire />
  </div>
</template>

<script>
import Questionnaire from './components/Questionnaire.vue';

export default {
  components: {
    Questionnaire
  }
};
</script>

