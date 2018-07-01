const toLocaleDateString = (date, locale = 'pt-br') => {
  if (!date) return null;

  return new Date(date).toLocaleDateString(locale);
};

export default toLocaleDateString;
