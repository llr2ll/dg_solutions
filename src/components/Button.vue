<template>

  <button class="bto-principal">{{ msg }}</button>

</template>

<script>

export default {
  props: ['msg']
}

</script>

<style scoped>
.bto-principal {
  padding: .5em 2em;
  border: 0;
  border-bottom: 3px solid;
  font-size: 1.2em;
  cursor: pointer;
  color: #fff;
  background-color: #0c8cd3;
  border-color: #04324c;
  width: 150px;
  display: block;
  clear: both;
  margin: 3.5% 0px;
}

.bto-principal:active {
  background-color: green;
}

.bto-principal[disabled=disabled],
.bto-principal:disabled {
  background-color: gray;
  border-color: darkgray;
}
</style>  