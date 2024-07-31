<template>
  <div class="app">
    <h1>Just A... Note</h1>
    <div class="note">
      <span class="add" @click="viewNote = true">+ Add note</span>
      <div class="type-note" v-if="viewNote">
        <input type="text" placeholder="Title..." v-model="noteTitle" />
        <textarea
          placeholder="Export What In Your Mind..."
          v-model="noteContent"
        ></textarea>
        <span @click="addNote">Add</span>
      </div>
      <ul class="notes">
        <li v-for="(note, index) in notes" @click="editNote(index)">
          <div class="title">{{ note.title }}</div>
          <p class="content">{{ note.content }}</p>
        </li>
      </ul>
      <div class="edit-note" v-if="editNoteView">
        <input type="text" placeholder="Title..." v-model="noteTitle" />
        <textarea
          placeholder="Export What In Your Mind..."
          v-model="noteContent"
        ></textarea>
        <div class="settings">
          <span class="close" @click="editNoteView = false">X</span>
          <span class="edit" @click="editNoteBtn">Edit</span>
          <span class="delete" @click="deleteNoteBtn">Delete</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const editNoteView = ref();
const viewNote = ref();
const noteTitle = ref("");
const noteContent = ref("");
let notes = ref([
  {
    title: "😃 Add Your Notes",
    content: "- It's Fun To Type Some Notes With Us!",
  },
]);
let currentNote = ref();
if (localStorage.getItem("notes")) {
  notes.value = JSON.parse(localStorage.getItem("notes"));
}
function addNote() {
  let newObj = { title: noteTitle.value, content: noteContent.value };
  notes.value.push(newObj);
  noteTitle.value = "";
  noteContent.value = "";
  viewNote.value = false;
  localStorage.setItem("notes", JSON.stringify(notes.value));
}
function editNote(index) {
  console.log(notes.value[index]);
  noteTitle.value = notes.value[index].title;
  noteContent.value = notes.value[index].content;
  console.log(noteContent.value);
  editNoteView.value = true;
  currentNote.value = index;
  console.log(currentNote.value);
  localStorage.setItem("notes", JSON.stringify(notes.value));
}
function editNoteBtn() {
  notes.value[currentNote.value].title = noteTitle.value;
  notes.value[currentNote.value].content = noteContent.value;
  noteTitle.value = "";
  noteContent.value = "";
  editNoteView.value = false;
  localStorage.setItem("notes", JSON.stringify(notes.value));
}
function deleteNoteBtn() {
  notes.value.splice(currentNote.value, 1);
  noteTitle.value = "";
  noteContent.value = "";
  editNoteView.value = false;
  localStorage.setItem("notes", JSON.stringify(notes.value));
}
</script>

<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-image: linear-gradient(to top, #151515, #2a2a2a);
  height: 100vh;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 26px !important;
  h1 {
    @media (max-width: 767px) {
      display: none;
    }
  }
  .note {
    background-color: #1b1b1b;
    width: 75%;
    height: 65%;
    padding: 20px;
    position: relative;
    overflow-y: scroll;
    @media (max-width: 767px) {
      width: 85%;
      height: 90%;
    }

    .add {
      display: block;
      margin-left: auto;
      margin-bottom: 10px;
      width: fit-content;
      padding: 8px;
      border-radius: 4px;
      cursor: pointer;
      user-select: none;
      background-color: #2a2a2a;
    }
    .notes {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin: 0;
      padding: 0;
      li {
        max-width: calc(50% - 25px);
        background-color: #2a2a2a;
        padding: 10px;
        list-style: none;
        transition: 0.3s;
        cursor: pointer;
        &:hover {
          transform: translate(0px, -2px);
        }
        .title {
          font-size: 24px;
        }
        .content {
          color: rgba(255, 255, 255, 0.6);
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2; /* number of lines to show */
          display: -webkit-box;
          line-clamp: 2;
          -webkit-box-orient: vertical;
          line-height: 1.8;
          font-size: 20px;
        }
      }
    }
    .type-note {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: #151515;
      display: flex;
      flex-direction: column;
      input {
        background-color: transparent;
        border: none;
        padding: 20px;
        caret-color: white;
        color: white;
        font-weight: bold;
        border-bottom: 1px solid #1a1a1a;
        &:focus {
          outline: none;
        }
      }
      textarea {
        height: 100%;
        background-color: transparent;
        border: none;
        padding: 20px;
        caret-color: white;
        color: white;
        resize: none;
        &:focus {
          outline: none;
        }
      }
      span {
        display: block;
        margin: 10px;
        margin-left: auto;
        width: fit-content;
        padding: 8px;
        font-size: 24px;
        border-radius: 4px;
        cursor: pointer;
        user-select: none;
        background-color: #2a2a2a;
      }
    }
  }
  .edit-note {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #151515;
    display: flex;
    flex-direction: column;
    input {
      background-color: transparent;
      border: none;
      padding: 20px;
      caret-color: white;
      color: white;
      font-weight: bold;
      border-bottom: 1px solid #1a1a1a;
      &:focus {
        outline: none;
      }
    }
    textarea {
      height: 100%;
      background-color: transparent;
      border: none;
      padding: 20px;
      caret-color: white;
      color: white;
      resize: none;
      &:focus {
        outline: none;
      }
    }
    .settings {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      span.close {
        position: absolute;
        width: 50px;
        height: 50px;
        display: grid;
        place-items: center;
        top: 10px;
        right: 10px;
        border: 1px solid #614747;
        border-radius: 50%;
        cursor: pointer;
        font-family: cursive;
        font-size: 18px;
      }
      span.edit {
        display: block;
        margin: 10px;
        // margin-left: auto;
        width: fit-content;
        padding: 8px;
        font-size: 20px;
        border-radius: 4px;
        cursor: pointer;
        user-select: none;
        background-color: #2a2a2a;
      }
      span.delete {
        display: block;
        margin: 10px 10px 10px 0;
        width: fit-content;
        padding: 8px;
        font-size: 24px;
        border-radius: 4px;
        cursor: pointer;
        user-select: none;
        background-color: #2a2a2a;
        background-image: linear-gradient(to bottom, #614747, #1e1e1e);
      }
    }
  }
}
</style>
