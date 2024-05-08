import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [
      { id: 1, title: "Buy some milk", isFav: false },
      { id: 2, title: "Play Football on turf", isFav: true },
    ],
  }),
  getters: {
    favs() {
      return this.tasks.filter((t) => t.isFav);
    },
    favsCount() {
      return this.tasks.reduce((p, c) => {
        return c.isFav ? p + 1 : p;
      }, 0);
    },
    totalCount: (state) => {
      return state.tasks.length;
    },
  },
  actions: {
    addTask(task) {
      this.tasks.push(task);
    },
  },
});
