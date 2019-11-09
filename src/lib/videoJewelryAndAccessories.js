import getCategory from './getCategory';

const videoCoatsAndJackets = (id) => {
  const video = getCategory(id).filter(v => v.id === id);
  return video["0"]["jewelryAndAccessories"];
}

export default videoCoatsAndJackets;
