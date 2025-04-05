<template>
    <div class="content">
      <h2>Мои заметки</h2>
      <ul>
        <li v-for="note in notes" :key="note.id">
          {{ note.text }}
        </li>
      </ul>
      <router-link to="/AddNote" class="link">Добавить Заметку</router-link>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        notes: [
          { id: 1, text: 'Первая заметка' },
          { id: 2, text: 'Вторая заметка' },
        ],
      };
    }
  };
</script>
