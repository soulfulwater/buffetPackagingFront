// importing gobal styles
require('~/global.css')

import DefaultLayout from '@/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)
}
