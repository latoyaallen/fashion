const getCategory = (category) => {
  console.log(category);
  if(category === 'streetStyle') {
    return "Street Style";
  }
  if(category === 'lookBooks') {
    return "Look Book";
  }
  if(category === 'vintage') {
    return "Vintage";
  }
  if(category === 'fashionWeek') {
    return "Fashion Week";
  }
}

export default getCategory;
