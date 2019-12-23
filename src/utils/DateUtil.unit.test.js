import { formatDate } from './DateUtil';

test("should format a date passed as date-str to the string format 'dd/MM/yyy'", () => {
  const date = new Date('2019-12-20T07:57:42Z');
  const formattedDate = formatDate(date);
  const expected = '20 Dec 2019';
  expect(formattedDate).toBe(expected);
});
