export const deepCloneArray = (arrayToClone) => {
  return JSON.parse(JSON.stringify(arrayToClone));
};


export const findInArray = (id, array) => {
return array.find(el => el.id === id)
}



export const findIndexInArray = (id, array) => {
  return array.findIndex(el => el.id === id)
  }