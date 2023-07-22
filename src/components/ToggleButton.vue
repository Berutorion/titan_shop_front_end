<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleState() {
      this.isActive = !this.isActive;
    },
  },
};
</script>
<template>
    <button @click="toggleState" :class="{ active: isActive }">
      {{ isActive ? 'On' : 'Off' }}
    </button>
  </template>
  <style>
  button.active {
    background-color: green;
    color: white;
  }
  </style>