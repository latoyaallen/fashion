import lookBooks from '../data/lookBooks'

const videoCreator = (category, id) => {
  if(category === 'lookBooks') {
    const video = lookBooks.filter(v => v.id === id);
    return video["0"]["creator"];
  }
}

export default videoCreator;
