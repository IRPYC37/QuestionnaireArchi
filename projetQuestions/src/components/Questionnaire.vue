<template>
  <div>
    <input type="text" v-model="newQuestionTitle" placeholder="Entrez le titre de la question" />
    <input type="text" v-model="newAnswer" placeholder="Entrez une réponse prédéfinie" />
    <button @click="addAnswer">Ajouter une réponse</button>
    <div v-for="(answer, index) in answers" :key="index">
      <input type="checkbox" v-model="answer.isCorrect" />
      <span>{{ answer.text }}</span>
    </div>
    <button @click="addQuestion">Ajouter une question</button>

    <div v-for="(question, index) in questions" :key="index">
      <Question :question="question" @updateQuestion="updateQuestion" @deleteQuestion="deleteQuestion" @editQuestion="editQuestion(question.id)" />
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
      questions: [],
      newQuestionTitle: '',
      newAnswer: '',
      answers: []
    };
  },
  methods: {
    addAnswer() {
      if (this.newAnswer.trim() !== '') {
        this.answers.push({ text: this.newAnswer, isCorrect: false });
        this.newAnswer = '';
      }
    },
    addQuestion() {
      if (this.newQuestionTitle.trim() !== '' && this.answers.length > 0) {
        const newQuestion = {
          id: Date.now(),
          text: this.newQuestionTitle,
          options: this.answers
        };
        this.questions.push(newQuestion);
        this.newQuestionTitle = '';
        this.answers = [];
      }
    },
    updateQuestion(questionId, newTitle) {
      const questionToUpdate = this.questions.find(question => question.id === questionId);
      if (questionToUpdate) {
        questionToUpdate.text = newTitle;
      }
    },
    deleteQuestion(questionId) {
      this.questions = this.questions.filter(question => question.id !== questionId);
    },
    editQuestion(questionId) {
      this.$router.push(`/modification/${questionId}`);
    }
  }
};
</script>
