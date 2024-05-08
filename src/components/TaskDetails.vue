<template>
    <div class="bg-slate-700 py-5 px-3 rounded-lg shadow-lg flex justify-between">
        <p class="text-xl">{{ task.title }}</p>
        <div>
            <i class="material-icons">favorite</i>
            <i class="material-icons">delete</i>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['task']
    }
</script>