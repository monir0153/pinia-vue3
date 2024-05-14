<template>
    <div class="bg-slate-700 py-5 px-3 rounded-lg shadow-lg flex justify-between" >
        <p class="text-xl">{{ task.title }}</p>
        <div>
            <i 
            @click="taskStore.toggleFav(task.id)" 
            class="material-icons"
            :class="{'text-red-600': task.isFav}"
            >favorite</i>
            <i @click="taskStore.deleteTask(task.id)" class="material-icons">delete</i>
        </div>
    </div>
</template>

<script>
import { useTaskStore } from '@/stores/TaskStore';

    export default {
        props: ['task'],
        setup(){
            const taskStore = useTaskStore()
            return {
                taskStore
            }
        }
    }
</script>