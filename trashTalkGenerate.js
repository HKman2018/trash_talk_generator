//return an item for array
function sample(Array) {
  const index = Math.floor(Math.random() * Array.length)
  return index
}
function trashTalkGenerate(career) {
  //define things user want
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']

  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']

  //return career  is no target
  if (!career) {
    return ` 請選擇一個職業產生幹話 ！！ `
  }
  //create a collection to store things user pick up
  let target = []
  let show_task = []
  if (career === 'engineer') {
    target = '工程師'
    show_task = task.engineer[sample(task.engineer)]
  }
  if (career === 'designer') {
    target = '設計師'
    show_task = task.designer[sample(task.designer)]
  }
  if (career === 'entrepreneur') {
    target = '創業家'
    show_task = task.entrepreneur[sample(task.entrepreneur)]
  }

  //return generate trash talk
  return `身為一個${target},${show_task},${phrase[sample(phrase)]}`
}
module.exports = trashTalkGenerate