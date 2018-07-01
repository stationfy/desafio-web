const limitString = (string, limiter = 10) => {
  if (!string) return '';

  let newString = string.substr(0, limiter);

  if (string.length >= limiter) {
    newString += '...';
  }

  return newString;
};

export default limitString;
