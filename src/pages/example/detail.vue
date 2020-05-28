<template>
  <div v-mt-loading="mainLoading" class="detail">
    <h2>这是商品详情页</h2>
    <hr />
    名字：{{ item.name }}
    <hr />
    单价：{{ item.price }}
    <hr />
    验证页面不重载: <input type="text" />
    <hr />
    营业厅: {{ shop }} <br />
    <hr />

    <button @click="toChooseShop">选择营业厅</button>
    <div v-show="shop !== '未选择'" class="buy">
      <hr />
      <button @click="buy">去下单</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data() {
    return {
      item: {},
      shop: '未选择',
      mainLoading: true,
    }
  },
  // activated() {
  //   console.log('actived');
  //   this.reloadFlag = false
  // },
  watch: {
    $route(now, old) {
      if (old.name === 'list') {
        this.innerReload()
      }
      if (old.name === 'shop-list') {
        // 设置一个标记，判断是否是从准确从main3回来的，只有真正选择后，main3Flag才是true
        let shopName = localStorage.getItem('shopName')
        if (!shopName) return
        this.shop = shopName
        localStorage.removeItem('shopName')
      }
    },
  },
  mounted() {
    this.initPageData()
  },
  methods: {
    innerReload() {
      // 争议：这里用reload感觉不太好，但是效果是对的
      // TODO: 在keep-alive的页面上，怎么重载当前页面呢，暂时没有找到更好的方法
      this.mainLoading = true
      window.location.reload()
      this.initPageData()
    },
    initPageData() {
      console.log('init')
      setTimeout(() => {
        this.item = this.$route.query
        this.mainLoading = false
      }, 1000)
    },
    toChooseShop() {
      this.$router.push('/shop-list')
    },
    buy() {
      this.$router.push('/buy')
    },
  },
}
</script>

<style scoped>
.detail {
  height: 100vh;
}
</style>
