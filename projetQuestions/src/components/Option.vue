<template>
  <div>
    <!-- Affichage du texte de l'option -->
    <div>{{ option.text }}</div>
    <!-- Bouton pour mettre à jour l'option -->
    <button @click="updateOption">Modifier</button>
    <!-- Bouton pour supprimer l'option -->
    <button @click="deleteOption">Supprimer</button>
  </div>
</template>

<script>
export default {
  props: {
    option: Object // Propriété pour passer l'option à ce composant
  },
  methods: {
    // Méthode pour émettre un événement indiquant que l'option doit être mise à jour
    updateOption() {
      // Vous pouvez ajouter ici la logique pour ouvrir un formulaire de mise à jour de l'option
      // ou tout autre mécanisme selon vos besoins
      this.$emit('updateOption', this.option);
    },
    // Méthode pour émettre un événement indiquant que l'option doit être supprimée
    deleteOption() {
      // Émission de l'événement avec l'identifiant de l'option à supprimer
      this.$emit('deleteOption', this.option.id);
    }
  }
};
</script>
