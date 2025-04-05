<template>
  <header>
    <h1>Простые заметки</h1>
    <nav>
        <router-link to="/">Главная</router-link>
        <router-link to="/ListNotes">Мои заметки</router-link>
        <router-link to="/AddNote">Создать заметку</router-link>
    </nav>
  </header>
  <v-container>
    <p>Добро пожаловать в приложение "Простые Заметки", созданое студенткой Нестеренко Ангелиной. 
      Здесь вы можете создавать и просматривать свои заметки</p>
      <img src="./note.jpg"/>
  </v-container>
  <router-view />
</template>
<script>
export default {
  name: 'App'
}
</script>
