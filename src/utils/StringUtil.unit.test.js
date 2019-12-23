import {
  getFirst250CharsDescription,
  getFirst100CharsTitle,
} from './StringUtil';

test('Should return "No description provided." when input is null or blank', () => {
  const expected = 'No description provided.';

  const input1 = null;
  const output1 = getFirst250CharsDescription(input1);
  expect(output1).toBe(expected);

  const input2 = '';
  const output2 = getFirst250CharsDescription(input2);
  expect(output2).toBe(expected);
});

test('Should return only first 250 characters + "..." of a long description', () => {
  const expectedLength = 253;

  const input = `aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa 
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`;
  const output = getFirst250CharsDescription(input);
  expect(output.length).toBe(expectedLength);
});

test('Should return only first 100 characters + "..." of a long title', () => {
  const expectedLength = 103;

  const input = `aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa 
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`;
  const output = getFirst100CharsTitle(input);
  expect(output.length).toBe(expectedLength);
});
