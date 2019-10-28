const daysAgo = (todayVar, dayPostedVar) => {
  var day = " day ago"
  var days = " days ago"
  const today = '2019-10-09';
  const dayPosted   = '2019-10-08';
  const timeDiff  = (new Date(today)) - (new Date(dayPosted));
  const numDays      = timeDiff / (1000 * 60 * 60 * 24)
  if(numDays === 1) {
    return numDays + day;
  }
  return numDays + days;
}

export default daysAgo;
