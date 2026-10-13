export function createPetals(n) {
  const petals = []
  for (let i = 0; i < n; i++) {
    petals.push({
      id: i,
      angle: (360 / n) * i,
      status: 'attached',
    })
  }
  return petals
}

export function getWord(count){
  let lastWord = null  
  if (count === 0){
    //何もしない
  }else if (count%2 === 0){
    lastWord = '嫌い'
  }else{
    lastWord = '好き'
  }

  return lastWord
}