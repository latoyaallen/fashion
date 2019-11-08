import lookBooks from '../data/lookBooks'

const videoTitle = (category, id) => {
  if(category === 'lookBooks') {
    const video = lookBooks.filter(v => v.id === id);
    return video["0"]["title"];
  }
}

export default videoTitle;
