<template>
  <div class="begin">
    <h2>开始</h2>
    <button @click="begin">start</button>
  </div>
</template>

<script>
export default {
  name: 'Begin',
  methods: {
    begin() {
      this.$router.push('/list')
    },
  },
}
</script>

<style scoped></style>
