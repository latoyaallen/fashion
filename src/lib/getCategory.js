import lookBooks from '../data/lookBooks'
import vintage from '../data/vintage'
import mostPopular from '../data/mostPopular'
import fashionWeek from '../data/fashionWeek'

const getCategory = (id) => {
  if((id)[0] === "1") { return fashionWeek; }
  if((id)[0] === "2") { return lookBooks; }
  if((id)[0] === "3") { return mostPopular; }
  if((id)[0] === "4") { return vintage; }
}

export default getCategory;
