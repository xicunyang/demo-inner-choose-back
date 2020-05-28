<template>
  <div class="list">
    <h2>这是商品列表页</h2>
    <div>
      <ul>
        <li v-for="item in list" :key="item.id" @click="toDetail(item)">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  data() {
    return {
      list: [
        {id: 1, name: '小米10 Pro', price: '3000.00'},
        {id: 2, name: 'macbook pro', price: '23000.00'},
        {id: 3, name: 'Mac Pro', price: '43000.00'},
        {id: 4, name: '红米K20 pro', price: '2699.00'},
        {id: 5, name: '测试机型 1', price: '3000.00'},
        {id: 6, name: '测试机型 2', price: '3100.00'},
        {id: 7, name: '测试机型 3', price: '3200.00'},
        {id: 8, name: '测试机型 4', price: '3300.00'},
        {id: 9, name: '测试机型 5', price: '3400.00'},
        {id: 10, name: '测试机型 6', price: '3500.00'},
      ],
    }
  },
  methods: {
    toDetail(item) {
      this.$router.push({
        path: '/detail',
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
