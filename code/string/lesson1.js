// export default (str) => {
//   // 字符串按空格进行分割
//   let arr = str.split(' ')
//   // 对数组进行遍历，每个元素进行反转
//   let result = arr.map(item => {
//     return item.split('').reverse().join('')
//   })
  
//   return result.join(' ')
// };

// export default (str) => {
//   // 1. 字符串按空格进行分割
//   // 2. 对数组进行遍历，每个元素进行反转
//   return str.split(/\s/g).map(item => {
//     return item.split('').reverse().join('')
//   }).join(' ')
// };


export default (str) => {
  // 1. 字符串按空格进行分割
  // 2. 对数组进行遍历，每个元素进行反转
  return str.match(/[\w']+/g).map(item => {
    return item.split('').reverse().join('')
  }).join(' ')
};
