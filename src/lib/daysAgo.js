const convertDate = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();

  var  month = '' + (d.getMonth() + 1);
  var  day = '' + d.getDate();

  if (month.length < 2) {
    month = '0' + month;
  }
  if (day.length < 2) {
    day = '0' + day;
  }

  return [year, month, day].join('-');
}

const daysAgo = (todayVar, dayPostedVar) => {
  const today = convertDate(todayVar);
  const dayPosted = convertDate(dayPostedVar);
  const timeDiff = (new Date(today)) - (new Date(dayPosted));
  const numDays = timeDiff / (1000 * 60 * 60 * 24)
  if(numDays === 1) {
    return numDays + " day ago";
  }
  if(numDays === 0) {
    return "today";
  }
  return numDays + " days ago";
}

export default {
  daysAgo,
  convertDate,
}

