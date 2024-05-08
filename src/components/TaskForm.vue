<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <div class="mb-4">
                <input
                 type="text"
                 id="title"
                 name="title"
                 class="w-[30%] mx-auto bg-white rounded border border-gray-300 focus:border-indigo-700 focus:ring-2 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                 placeholder="i need to....."
                 v-model="newTask"
                 >
                 <button class="bg-violet-700 px-5 py-2 rounded-lg">add Task</button>
                </div>
        </form>
        
    </div>
</template>

<script>
import { useTaskStore } from '@/stores/TaskStore'
import { ref } from 'vue';
    export default {
        setup() {
            const taskStore = useTaskStore();
            const newTask = ref('');
            const handleSubmit = () => {
                if(newTask.value.length > 0){
                    taskStore.addTask({
                        title: newTask.value,
                        isFav: false,
                        id: Math.floor(Math.random() * 10000)
                    });
                    newTask.value = '';
                }
            };
            return {
                newTask,
                handleSubmit
            }
        }

    }
</script>