import axios from 'axios';

export default {
  // 获取基础清单分页数据
  list (data) {
    return axios.post('/monster-dyson-sphere-program/recipe/list', data);
  },
};
