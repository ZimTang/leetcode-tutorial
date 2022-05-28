// 914.卡牌分组
export default (deck) => {
  // 排序
  deck.sort((a,b) => a-b)
  let min = Number.MAX_SAFE_INTEGER
  let dst = []
  let result = true
  for(let i = 0, len = deck.length, tmp = []; i < len; i++) {
    tmp.push(deck[i])
    for(let j = i + 1; j < len - 1; j++) {
      if(deck[i] === deck[j]) {
        tmp.push(deck[j])
      }else{
        if(min > tmp.length) {
          min = tmp.length
        }
        dst.push([...tmp])
        tmp.length = 0
        i = j
        break
      }
    }
  }
  dst.every(item => {
    if(item.length % min !== 0 ) {
      result = false
      return false
    }
  })
  return result
}