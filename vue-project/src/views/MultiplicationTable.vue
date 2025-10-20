<script setup>

import {ref} from "vue";

let rows = ref(10)
let cols = ref(10)

console.log('How many rows do I have?' , rows)
</script>

<template>
<h1>multiplication table lives here lol</h1>

  <div class="inputs">
    <label id="rows"
           <span>Rows:</span>
    <input id="number" id="rows" v-model:value="rows"/>
    </label>

    <label id="cols"
           <span>Cols:</span>
    <input id="number" id="cols" v-model:value="cols"/>
    </label>

    <p>Hi There {{name}}, let's build our table:</p>

    <p>Hi there <span v-html="name"/>, let's build our table: </p>
    <p>Hi there!</p>
    <p>Hi There {{name}}, let's build our table:</p>
    <p>How many rows do I have? {{rows}}</p>
    <p>How many cols do I have? {{cols}}</p>
  </div>

</template>

<style scoped>
div.inputs {
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

label {
  padding : 10px;
  border: 1px solid black;
  display: flex;
  gap: 15px;
}

</style>
