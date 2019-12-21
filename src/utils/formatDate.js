export default function(date) {
  //se algo der errado e retorna undefined react vai levar a um erro, com null, isso não acontece
  if (!date) return null;
  return new Date(date).toLocaleDateString("pt-br");
}
