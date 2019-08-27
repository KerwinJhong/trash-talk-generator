function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function generateComment(options) {
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    founder: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']

  // create a collection to store things user picked up
  let collection = []

  if (options.engineer === 'on') {
    collection = collection.concat(sample(task.engineer), sample(phrase))
  }

  if (options.designer === 'on') {
    collection = collection.concat(sample(task.designer), sample(phrase))
  }

  if (options.founder === 'on') {
    collection = collection.concat(sample(task.founder), sample(phrase))
  }

  if (collection.length === 0) {
    return '給個面子選個角色吧～～'
  }

  if (Object.keys(options).length > 1) {
    return '工作太多了，你要爆肝囉'
  }
  return collection[0] + collection[1]
}

module.exports = generateComment
