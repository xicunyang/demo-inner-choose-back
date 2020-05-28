<template>
  <div class="shopDetail">
    <h2>营业厅详情</h2>

    <hr />
    名字：{{ item.name }}
    <hr />
    <button @click="choose">选择并返回商品详情页</button>
  </div>
</template>

<script>
export default {
  name: 'ShopDetail',
  data() {
    return {
      item: {},
    }
  },
  mounted() {
    this.item = this.$route.query
  },
  methods: {
    choose() {
      localStorage.setItem('shopName', this.item.name)

      this.$router.back(-1)
      this.$router.back(-1)
    },
  },
}
</script>

<style scoped></style>
