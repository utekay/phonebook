<template lang="html" functional>
  <div class="spinner">
    <p class="spinner__message">
      Please, wait
    </p>
  </div>
</template>

<style lang="css" scoped>
.spinner {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
}
.spinner__message {
  margin: 35vh auto;
  text-align: center;
}
</style>
