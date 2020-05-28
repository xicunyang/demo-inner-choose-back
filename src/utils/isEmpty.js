export default function (value = {}) {
  // 数字或者函数 为false
  if (typeof value === 'number' || value instanceof Function) return false
  return value === '' || value == null || Object.keys(value).length === 0
}
