export default function fomartText(description, length) {
  if (!description) return "Sem descrição";

  let newDescription;
  if (description.length < length) {
    newDescription = description;
  }
  if (description.length >= length) {
    newDescription = description.substr(0, length);
    newDescription += "...";
  }

  return newDescription;
}
