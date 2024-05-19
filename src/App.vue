<template>
  <div>
    <main>
      <!-- Heading -->
      <header class="text-white mt-5">
        <img
          src="./assets/logo.svg"
          alt="pinia logo"
          srcset=""
          width="100px"
          class="mx-auto"
        />
        <p class="text-2xl font-semibold text-center">Pinia Task</p>
      </header>
      <!-- Add new task -->
      <div class="text-center">
        <TaskForm />
      </div>
      <!-- nav -->
      <nav class="text-center text-white">
        <button
          class="px-3 py-2 bg-slate-700 m-3 rounded-lg"
          @click="filter = 'all'"
        >
          all task
        </button>
        <button
          class="px-3 py-2 bg-slate-700 m-3 rounded-lg"
          @click="filter = 'favs'"
        >
          Favorite
        </button>
        <button
          class="px-3 py-2 bg-slate-700 m-3 rounded-lg"
          @click="taskStore.$reset"
        >
          Reset state
        </button>
      </nav>
      <!-- loading -->
      <!-- Task List -->
      <div class="text-white w-5/12 mx-auto" v-if="filter === 'all'">
        <p>you have {{ totalCount }} task left to do</p>
        <p class="text-center text-white text-5xl" v-if="loading">
          loading task...
        </p>
        <div v-for="task in tasks" :key="task.id" class="py-5">
          <TaskDetails :task="task" />
        </div>
      </div>
      <div class="text-white w-5/12 mx-auto" v-if="filter === 'favs'">
        <p>you have {{ favsCount }} fav left to do</p>
        <div v-for="task in favs" :key="task.id" class="py-5">
          <TaskDetails :task="task" />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { ref } from "vue";
import TaskDetails from "./components/TaskDetails.vue";
import { useTaskStore } from "./stores/TaskStore";
import TaskForm from "./components/TaskForm.vue";
import { storeToRefs } from "pinia";

export default {
  components: {
    TaskDetails,
    TaskForm,
  },
  setup() {
    const taskStore = useTaskStore();
    const { tasks, loading, favs, totalCount, favsCount } =
      storeToRefs(taskStore);
    taskStore.getTasks();
    const filter = ref("all");
    return { taskStore, filter, tasks, loading, favs, totalCount, favsCount };
  },
};
</script>
