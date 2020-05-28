import router from './router'
import NProgress from 'nprogress'
import './plugins/nprogress/nprogress.css'
import i18n from './i18n'
import {TITLE} from './constants'

NProgress.configure({showSpinner: false})

const getPageTitle = (key) => {
  const hasKey = i18n.te(`route.${key}`)
  if (hasKey) {
    // 使用i18n进行转化
    return `${i18n.t(`route.${key}`)} - ${TITLE}`
  }
  return TITLE
}

router.beforeEach((to, from, next) => {
  NProgress.start()
  setTimeout(() => {
    // 校验token
    next()
    NProgress.done()
  }, 100)
})

router.afterEach((to) => {
  NProgress.done()
  document.title = getPageTitle(to.meta.title)
})
