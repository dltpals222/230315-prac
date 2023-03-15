export function tagMake (parentName, tagName, Num){
  for(let i=0; i<Num;i++){
    const element = document.createElement(tagName)
    parentName.appendChild(element)
  }
}