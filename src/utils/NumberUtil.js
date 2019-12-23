export function formatNumberToThousands(number) {
  const numberStr = number.toString();
  return parseFloat(numberStr).toLocaleString('en');
}
