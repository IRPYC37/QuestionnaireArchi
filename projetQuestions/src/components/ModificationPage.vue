<template>
  <div>
    <h1>Modification de la question {{ questionId }}</h1>
    <!-- Champs de saisie pour la modification de la question -->
    <input type="text" v-model="updatedQuestionTitle" placeholder="Nouveau titre de la question" />
    <!-- Boutons pour la modification et l'annulation -->
    <button @click="updateQuestion">Enregistrer</button>
    <button @click="cancelModification">Annuler</button>
  </div>
</template>

<script>
export default {
  props: {
    questionId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      updatedQuestionTitle: '' // Stocke le nouveau titre de la question
    };
  },
  mounted() {
    // Charge la question à modifier lors du montage du composant
    this.loadQuestion();
  },
  // Méthodes et logique pour la modification de la question
  methods: {
    // Méthode pour charger la question à modifier
    loadQuestion() {
      // Remplacez cette logique par la méthode appropriée pour charger la question à partir de son ID
      // Par exemple, une requête HTTP vers votre backend
      console.log('Chargement de la question avec ID:', this.questionId);
    },
    // Méthode pour mettre à jour la question modifiée
    updateQuestion() {
      // Remplacez cette logique par la méthode appropriée pour mettre à jour la question modifiée
      // Par exemple, une requête HTTP PUT ou PATCH vers votre backend
      console.log('Mise à jour de la question avec ID:', this.questionId, 'Nouveau titre:', this.updatedQuestionTitle);
      // Une fois la mise à jour réussie, vous pouvez rediriger l'utilisateur vers la page d'accueil ou une autre page
      this.$router.push('/home');
    },
    // Méthode pour annuler la modification et revenir en arrière
    cancelModification() {
      // Vous pouvez rediriger l'utilisateur vers la page précédente ou la page d'accueil
      console.log('Modification annulée. Retour à la page précédente.');
      this.$router.go(-1); // Revenir à la page précédente dans l'historique de navigation
    }
  }
};
</script>
