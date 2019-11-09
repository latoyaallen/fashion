import getCategory from './getCategory';

const videoTops = (id) => {
  const video = getCategory(id).filter(v => v.id === id);
  return video["0"]["tops"];
}

export default videoTops;
