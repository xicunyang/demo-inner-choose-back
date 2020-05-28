<template>
  <div class="begin">
    <h2>开始</h2>
    {{ $t('name') }} <br />

    {{ $t('msg.detail') }}<br />
    切换语言为:
    <button @click="changeLanguage('en')">英文</button>
    <button @click="changeLanguage('zh')">中文</button>
    <hr />
    测试样式:
    <div class="test-less"></div>
    <div class="common-css"></div>
    <hr />
    <!--测试自定义filter-->
    {{ 'name' | preNameFilter }}
    <hr />
    <button @click="begin">start</button>
    <hr />
    <icon-svg icon-class="xuegao"></icon-svg>
    <icon-svg icon-class="yezhi"></icon-svg>
    <icon-svg icon-class="yezhi"></icon-svg>
    <icon-svg icon-class="xigua"></icon-svg>
  </div>
</template>

<script>
import '@/icons/svgs/yezhi.svg'
import '@/icons/svgs/xigua.svg'

export default {
  name: 'Begin',
  mounted() {},
  methods: {
    begin() {
      this.$router.push('/list')
    },
    changeLanguage(type) {
      localStorage.setItem('locale', type)

      // 修改显示的语言
      this.$i18n.locale = type
    },
  },
}
</script>

<style scoped lang="less">
.test-less {
  width: @width;
  height: @height;
  background-color: red;
  margin: 0 auto;
  margin-top: 20px;
}
</style>
