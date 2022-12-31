const files = require.context('./', true, /\.js$/);

// 引入全部./下的 js 文件
const fileList = files.keys().reduce((fileList, filePath) => {
  const fileName = filePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  const value = files(filePath);
  // 去除掉index.js本身
  if (fileName === 'index') {
    return fileList;
  }
  fileList[fileName] = value.default;
  return fileList;
}, {});

export default fileList;
