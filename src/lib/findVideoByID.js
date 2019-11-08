import lookBooks from '../data/lookBooks'
const findVideoByID = (category, id) => {
  console.log("id");
  console.log(id);
  console.log(lookBooks.filter(v => v.id === id));
  if(category === 'lookBooks') {
    const video = lookBooks.filter(v => v.id === id);
    return lookBooks[id];
  }
}

export default findVideoByID;
