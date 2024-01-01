import axios from 'axios';

export default {
  // 获取枚举类型分页数据
  getEnumerateTypePage (data) {
    return axios.post('/monster-security/enumerate/getEnumerateTypePage', data);
  },
  insertEnumerateType (data) {
    return axios.post('/monster-security/enumerate/insertEnumerateType', data);
  },
};
