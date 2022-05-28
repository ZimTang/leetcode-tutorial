export default (str) => {
  // 建立键盘字母映射
  let map = ['',1,'abc','def','ghi','jkl','mno','pqrs','tuv','wxyz']
  // 将传入的字符串分割
  let num = str.split('') // [2,3,4]
  let code = []
  num.forEach(item => {
    if(map[item]) {
      code.push(map[item])
    }
  })
  let comb = (arr) => {
    let tmp = []
    for(let i = 0, il = arr[0].length; i < il; i++) {
      for(let j = 0, jl = arr[1].length; j < jl; j++) {
        tmp.push(`${arr[0][i]}${arr[1][j]}`)
      }
    }
    arr.splice(0,2,tmp)
    if(arr.length > 1) {
      // 递归
      comb(arr[0])
    } else {
      return tmp
    }
    return arr[0]
  }
  return comb(code)
}