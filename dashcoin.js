const respuesta = async () => {
  const respuestaFetch = await fetch("https://baconipsum.com/api/?type=meat-and-filler");
  const data = await respuestaFetch.json(); /*aqui almacenamos a la info de donde hamos traido */
  console.log(data);
  return data;
};

const printRespuesta = async () => {
  const texto = await respuesta();
  document.querySelector(".parafo2").innerHTML = texto; /*con innerHtml vamos a decirle que vamos a entrar en el contenido que hay en el parafo2 */
  /* vaya al doc y busca el parafo.2 */
};

/* vamos a llamar a esta funncion*/

printRespuesta();




