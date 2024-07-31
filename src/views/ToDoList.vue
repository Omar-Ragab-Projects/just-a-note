<template>
  <div class="app">
    <form action="">
      <input type="text" placeholder="Add Your Task" v-model="inputText" />
      <button
        class="add"
        @click.prevent="addTask"
        type="button"
        :disabled="!inputText"
      >
        Add Task
      </button>
      <button class="dall" v-if="tasks.length > 1" @click.prevent="deleteAll">
        Delete All
      </button>
    </form>
    <div class="tasks" v-for="(task, index) in tasks">
      <div
        class="task-text"
        @click="task.done = !task.done"
        :style="{ 'text-decoration': task.done ? 'line-through' : '' }"
      >
        {{ task.words }}
      </div>
      <span @click="deleteTask(index)">Delete</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const inputText = ref("");
const tasks = ref([]);
function addTask() {
  tasks.value.push({ words: inputText.value, done: false });
  inputText.value = "";
}
function deleteTask(index) {
  tasks.value.splice(index, 1);
}
function deleteAll() {
  tasks.value = [];
}
</script>

<style lang="scss" scoped>
.app {
  box-sizing: border-box;
  width: fit-content;
  margin: auto;
  box-shadow: 0 0 10px #f2f2f2;
  padding: 20px;
  form {
    display: flex;
    gap: 6px;
    input {
      padding: 6px 10px;
      border: 1px solid #ddd;
      &:focus {
        outline: none;
      }
    }
    .add {
      background-color: rgb(124, 124, 230);
      color: white;
      border: none;
      cursor: pointer;
    }
    .dall {
      background-color: red;
      color: white;
      border: none;
      cursor: pointer;
    }
  }
  .tasks {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-top: 10px;

    .task-text {
      padding: 6px 10px;
      background-color: #eee;
      width: 100%;
      cursor: pointer;
    }
    span {
      padding: 6px 10px;
      background-color: red;
      color: white;
      cursor: pointer;
    }
  }
}
</style>
