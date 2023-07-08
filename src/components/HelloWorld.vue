<template>
  <div class="hello">
    <b-jumbotron
      header="Vue3 Bootstrap Vue"
      lead="Bootstrap v4 Components for Vue.js 2"
    >
      <p>Now running on @vue/compat and Vue.js 3</p>
      <p>{{ msg }}</p>
      <b-button variant="primary" @click="helloworld">Hello World</b-button>
    </b-jumbotron>

    <b-container fluid>
      <h1>{{ message }}</h1>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      message: "",
    };
  },
  methods: {
    helloworld() {
      this.message = "Hello World";
      this.$bvModal.msgBoxOk(this.message);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
