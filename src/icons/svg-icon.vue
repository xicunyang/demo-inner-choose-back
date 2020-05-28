<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    iconClass: {
      type: String,
      default: '',
    },
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`
    },
  },
}
</script>

<style scoped lang="less">
.svg-icon {
  width: 30px;
  height: 30px;
  fill: currentColor;
  overflow: hidden;
}
</style>
