import axios from 'axios'

export default {
  // 获取枚举类型分页数据
  getEnumerateTypePage(data) {
    return axios.post('/monster-security/enumerate/getEnumerateTypePage', data)
  },
  saveEnumerateType(data) {
    return axios.post('/monster-security/enumerate/saveEnumerateType', data)
  },
  deleteEnumerateType(params) {
    return axios.postForm('/monster-security/enumerate/deleteEnumerateType', params)
  },
  deleteEnumerateData(params) {
    return axios.postForm('/monster-security/enumerate/deleteEnumerateData', params)
  },
  saveEnumerateData(data) {
    return axios.post('/monster-security/enumerate/saveEnumerateData', data)
  },
  updateEnumerateDataSort(data) {
    return axios.post('/monster-security/enumerate/updateEnumerateDataSort', data)
  },
  getEnumerateDataByType(params) {
    return axios.postForm('/monster-security/enumerate/getEnumerateDataByType', params)
  }
}
