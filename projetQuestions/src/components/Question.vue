<template>
  <div>
    <!-- Affichage de la question et des options -->
    <div>{{ question.text }}</div>
    <div v-for="(option, index) in question.options" :key="index">
      <input type="checkbox" v-model="option.isCorrect" />
      <span>{{ option.text }}</span>
    </div>
    
    <!-- Boutons de suppression et de modification -->
    <button @click="editQuestion">Modifier</button>
    <button @click="deleteQuestion">Supprimer</button>
  </div>
</template>

<script>
export default {
  props: {
    question: Object
  },
  methods: {
    editQuestion() {
      this.$emit('editQuestion', this.question.id);
    },
    deleteQuestion() {
      this.$emit('deleteQuestion', this.question.id);
    }
  }
};
</script>
