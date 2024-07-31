<template>
  <div class="app">
    <div
      class="gradient-preview"
      :style="`
        background-image: linear-gradient(${direction}, ${colorOne}, ${colorTwo})
      `"
    >
      Preview
    </div>
    <hr />
    <form action="">
      <div class="direction">
        <label for="">Direction:</label>
        <select v-model="direction">
          <option value="to right">to right</option>
          <option value="to left">to left</option>
          <option value="to bottom">to bottom</option>
          <option value="to top">to top</option>
        </select>
      </div>
      <div class="color-one">
        <label for="">Color One:</label>
        <input type="color" v-model="colorOne" />
      </div>
      <div class="color-two">
        <label for="">Color Two:</label>
        <input type="color" v-model="colorTwo" />
      </div>
      <div class="color-three" v-if="colorThree">
        <label for="">Color Three:</label>
        <input type="color" v-model="colorThree" />
      </div>
    </form>
    <div class="rezult">
      Css Code:
      <span
        >background-image: linear-gradient({{ direction }}, {{ colorOne }},
        {{ colorTwo }});
      </span>
    </div>
    <div class="syntax">
      Syntax:
      <span
        >background-image: linear-gradient(direction, color-stop1, color-stop2,
        ...);
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const direction = ref("to right");
const colorOne = ref("red");
const colorTwo = ref("yellow");
</script>

<style lang="scss" scoped>
.app {
  .gradient-preview {
    width: 100%;
    height: 100px;
    display: grid;
    place-items: center;
    color: white;
  }
  form {
    width: fit-content;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    label {
      display: inline-block;
      width: 100px;
    }
  }
  .rezult {
    text-align: center;
    margin: 20px 0;
    user-select: none;
    span {
      background-color: #eee;
      padding: 10px;
      font-weight: bold;
      user-select: text;
    }
  }
  .syntax {
    text-align: center;
  }
}
</style>
