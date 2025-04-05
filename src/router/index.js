import { createRouter, createWebHistory } from 'vue-router';
import ListNotes from '../views/ListNotes.vue'
import AddNote from '../views/AddNote.vue'

const routes = [
  {
    path: '/ListNotes',
    name: 'ListNotes',
    component: ListNotes
  },
  {
    path: '/AddNote',
    name: 'AddNote',
    component: AddNote
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
