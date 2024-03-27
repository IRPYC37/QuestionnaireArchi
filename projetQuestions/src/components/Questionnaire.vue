<template>
  <div id="head">
    <!-- Champ de saisie pour le titre de la nouvelle question -->
    <input type="text" v-model="newQuestionTitle" placeholder="Entrez le titre de la question" />
    <!-- Bouton pour ajouter une nouvelle question -->
    <button @click="addQuestion">Ajouter une question</button>

    <!-- Affichage des questions existantes -->
    <div v-for="(question, index) in questions" :key="index">
      <!-- Utilisation du composant Question pour chaque question -->
      <Question :question="question" @updateQuestion="updateQuestion" @deleteQuestion="deleteQuestion" />
    </div>
  </div>
</template>

<script>
import Question from './Question.vue';

export default {
  components: {
    Question
  },
  data() {
    return {
      questions: [], // Tableau contenant les questions
      newQuestionTitle: '' // Titre de la nouvelle question
    };
  },
  methods: {
    // Méthode pour ajouter une nouvelle question
    addQuestion() {
      if (this.newQuestionTitle.trim() !== '') {
        const newQuestion = {
          id: Date.now(), // Identifiant unique pour la question
          text: this.newQuestionTitle,
          options: [] // Tableau pour les options de réponse (vide pour le moment)
        };
        this.questions.push(newQuestion);
        this.newQuestionTitle = ''; // Réinitialiser le champ de saisie du titre de la question
      }
    },
    // Méthode pour mettre à jour le titre d'une question
    updateQuestion(questionId, newTitle) {
      const questionToUpdate = this.questions.find(question => question.id === questionId);
      if (questionToUpdate) {
        questionToUpdate.text = newTitle;
      }
    },
    // Méthode pour supprimer une question
    deleteQuestion(questionId) {
      this.questions = this.questions.filter(question => question.id !== questionId);
    }
  }
};
</script>
