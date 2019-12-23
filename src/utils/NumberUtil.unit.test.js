import { formatNumberToThousands } from './NumberUtil';

test("should format '9999' to '9,999'", () => {
  const number = 9999;
  const formattedNumber = formatNumberToThousands(number);

  const expected = '9,999';
  expect(formattedNumber).toBe(expected);
});
