import lookBooks from '../data/lookBooks'

const videoSrc = (category, id) => {
  if(category === 'lookBooks') {
    const video = lookBooks.filter(v => v.id === id);
    return video["0"]["src"];
  }
}

export default videoSrc;
