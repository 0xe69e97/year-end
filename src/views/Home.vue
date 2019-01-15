<template>
  <div class="home">
    <div class="my-photo"></div>
    <Button type="primary" class="custom-button" @click="start" size="large">Start</Button>
  </div>
</template>

<script>

export default {
  name: 'home',
  methods: {
    start() {
      this.$router.push('main')
    }
  }
}
</script>

<style scoped>
  .home {
    width: 100vw;
    height: 100vh;
    background-color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
  }
  .home div {
    margin: 10px;
  }
  .my-photo {
    background-image: url('../assets/my-photo.jpeg');
    /* background-image: url('../assets/logo.png'); */
    width: 180px;
    height: 180px;
    border-radius: 100px;
    background-size: 180px;
    margin: 0 auto;
  }
  .custom-button {
    height: 50px;
    width: 150px;
  }
</style>