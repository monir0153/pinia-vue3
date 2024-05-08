<template>
  <div>
    <main>
      <!-- Heading -->
      <header class="text-white mt-5">
        <img src="./assets/logo.svg" alt="pinia logo" srcset="" width="100px" class="mx-auto">
        <p class="text-2xl font-semibold text-center">Pinia Task</p>
      </header>
      <!-- Add new task -->
      <div>
        <TaskForm />
      </div>
      <!-- nav -->
      <nav class="text-center text-white">
        <button class="px-3 py-2 bg-slate-700 m-3 rounded-lg" @click="filter = 'all'">all task</button>
        <button class="px-3 py-2 bg-slate-700 m-3 rounded-lg" @click="filter = 'favs'">Favorite</button>
      </nav>
      <!-- Task List -->
      <div class="text-white w-5/12 mx-auto " v-if="filter === 'all'">
        <p>you have {{ taskStore.totalCount }} task left to do</p>
        <div v-for="task in taskStore.tasks" :key="task.id" class="py-5">
          <TaskDetails :task="task"/>
        </div>
      </div>
      <div class="text-white w-5/12 mx-auto " v-if="filter === 'favs'">
        <p>you have {{ taskStore.favsCount }} fav left to do</p>
        <div v-for="task in taskStore.favs" :key="task.id" class="py-5">
          <TaskDetails :task="task"/>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { ref } from 'vue';
import TaskDetails from './components/TaskDetails.vue';
import { useTaskStore } from './stores/TaskStore';
import TaskForm from './components/TaskForm.vue';

  export default {
    components: {
      TaskDetails,
        TaskForm
    },
    setup() {
      const taskStore = useTaskStore()
    const filter = ref('all')
      return {taskStore, filter}
    }
  }
</script>