<template>
  <div>
    <!-- Affichage du texte de la question -->
    <div>{{ question.text }}</div>
    <!-- Bouton pour modifier la question -->
    <button @click="editQuestion">Modifier</button>
    <!-- Bouton pour supprimer la question -->
    <button @click="deleteQuestion">Supprimer</button>
  </div>
</template>

<script>
export default {
  props: {
    question: Object // Propriété pour passer la question à ce composant
  },
  methods: {
    // Méthode pour éditer le titre de la question
    editQuestion() {
      const newTitle = prompt('Entrez le nouveau titre de la question :', this.question.text);
      if (newTitle !== null && newTitle.trim() !== '') {
        this.$emit('updateQuestion', this.question.id, newTitle);
      }
    },
    // Méthode pour émettre un événement indiquant que la question doit être supprimée
    deleteQuestion() {
      this.$emit('deleteQuestion', this.question.id);
    }
  }
};
</script>
