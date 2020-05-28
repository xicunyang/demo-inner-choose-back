<template>
  <div class="shopList">
    <h2>营业厅列表</h2>
    <ul>
      <li v-for="item in list" :key="item.id" @click="toShopDetail(item)">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ShopList',
  data() {
    return {
      list: [
        {id: 1, name: '1号营业厅'},
        {id: 2, name: '2号营业厅'},
        {id: 3, name: '3号营业厅'},
      ],
    }
  },
  methods: {
    toShopDetail(item) {
      this.$router.push({
        path: '/shop-detail',
        query: item,
      })
    },
  },
}
</script>

<style scoped>
li {
  height: 70px;
  background-color: rgba(100, 100, 100, 0.2);
  font-size: 27px;
  line-height: 70px;
  margin: 10px 10px;
}
</style>
