/*
配置编译环境和线上环境之间切换
baseUrl:域名地址
imgUrl:图片资源地址
mobileUrl:移动端地址
*/

let baseUrl = ''
let imgUrl = ''
let mobileUrl = ''
if (process.env.NODE_ENV === 'development') {
    
} else if (process.env.NODE_ENV === 'production') {
  // 测试环境
  if (!process.env.BUILD_PROD) {
    
  // 正式环境
  } else {
   
  }
}

export {
  baseUrl,
  imgUrl,
  mobileUrl
}
