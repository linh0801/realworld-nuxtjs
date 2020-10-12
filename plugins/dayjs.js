import Vue from 'vue'
import dayjs from 'dayjs'
Vue.filter('date', (beforeDate, formate='YYYY-MM-DD HH:mm:ss') => {
  return dayjs(beforeDate).format(formate)
})