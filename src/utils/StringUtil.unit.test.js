import { formattedDescription, formattedTitle } from './StringUtil';

test('jest is working', () => {
  expect(true).toBe(false);
});
test('todos os espaços são removidos da string', () => {
  // para manter nossos testes organizados é bom
  //  isolar os inputs, outputs e o valor que
  //  esperamos que o output receba após executado a função
  const input = 'testes são bons'; // como vai entrar na função
  const expected = 'testessãobons'; // como deve sair da função

  const output = removeSpaces(input); // resultado da função

  // aqui é onde acontece a magia, verificamos se o
  //  output realmente é igual ao valor esperado
  //  com o matcher `.toBe` que é basicamente um `===`
  expect(output).toBe(expected);
});
