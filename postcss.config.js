module.exports = {
  plugins: {
    // 'autoprefixer': {
    //     browsers: ['Android >= 4.0', 'iOS >= 8']
    // },
    'postcss-pxtorem': {

      // rootValue: 37.5,//有两种定义方法1.固定的值2.函数（可以动态处理返回）

      rootValue ({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75
        // 如果是vant的样式，就按照37.5来转换
        // 如果是我们自己的样式，就按照75来转换
      },
      propList: ['*']
    }
  }
}
