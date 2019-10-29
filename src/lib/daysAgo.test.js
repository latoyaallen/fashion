import {
  daysAgo,
  convertDate,
} from './daysAgo'

it('gives 1 day ago', () => {
  const datePosted = "Mon Oct 27,2019"
  const today = "Tue Oct 28, 2019"
  expect(daysAgo(today, datePosted)).toEqual("1 day ago");
});

it('converts a string date to the correct format', () => {
  const date = "Mon Oct 9, 2019"
  expect(convertDate(date)).toEqual("2019-10-09");
});
