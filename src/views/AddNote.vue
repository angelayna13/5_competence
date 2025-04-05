<template>
  <div class="content">
    <h2>Добавить Заметку</h2>
    <div class="add">
      <input v-model="newNote" placeholder="Введите текст заметки" />
      <button @click="addNote">Добавить</button>
    </div>
    <router-link to="/ListNotes" class="link">Назад к списку заметок</router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newNote: '',
    };
  },
  methods: {
    addNote() {
      // Здесь можно добавить логику для сохранения заметки
      alert(`Заметка добавлена: ${this.newNote}`);
      this.newNote = ''; 
    },
  },
};
</script>
