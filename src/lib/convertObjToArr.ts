export default function convertObjToArr (objects: Object) {
  let arr:any = [];
  for (let key in objects) {
    const object = objects[key];
    object.id = key;
    arr.push(object);
  }
  return arr;
}