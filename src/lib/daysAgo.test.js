import daysAgo from './daysAgo'

it('gives 1 day ago', () => {
  const datePosted = "Mon Oct 8th"
  const today = "Tue Oct 9th"
  expect(daysAgo(today, datePosted)).toEqual("1 day ago");
});

xit('gives 2 days ago', () => {
  const datePosted = "Mon Oct 8th"
  const today = "Wed Oct 10th"
  expect(daysAgo(today, datePosted)).toEqual("2 days ago");
});

xit('gives today', () => {
  const datePosted = "Mon Oct 8th"
  const today = "Mon Oct 8th"
  expect(daysAgo(today, datePosted)).toEqual("today");
});


