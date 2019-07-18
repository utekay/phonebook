<template lang="html" functional>
  <button v-on:click="listeners.click"
    v-bind:class="props.className"
    class="button"
    type="button"
  >
    <slot></slot>
  </button>
</template>
