import axios from 'axios'

export default {
  // 获取基础清单分页数据
  pageInventory(data) {
    return axios.post('/monster-dyson-sphere-program/inventory/pageInventory', data)
  }
}
