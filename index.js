const respuesta1 = async () => {
    const respuestaFetch = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await respuestaFetch.json(); /*aqui almacenamos a la info de donde hamos traido */
    console.log(data);
    return data;
  };
  
  const printRespuesta2 = async () => {
    const nombreVariable = await respuesta1();
    document.querySelector("#simplifyId").innerHTML = nombreVariable.title; /*con innerHtml vamos a decirle que vamos a entrar en el contenido que hay en el parafo2 */
    document.querySelector("#uiDesign").innerHTML = nombreVariable.body;
    /* vaya al doc y busca el parafo.2 */
  };
  
  /* vamos a llamar a esta funncion*/
  
  printRespuesta2();
  
  /********dashcoin******* */ 

const dashcoin = async() => {
  const respuestaFetchnueva = await fetch("https://jsonplaceholder.typicode.com/posts/3");
  const dataQueReciboDeJason = await respuestaFetchnueva.json();
  console.log(dataQueReciboDeJason);
  return dataQueReciboDeJason;
};

const printDascoin = async() => {
const data2 = await dashcoin();
document.querySelector("#dashcoinId").innerHTML = data2.title;
document.querySelector("#webDevelopmentId").innerHTML = data2.body;
}

printDascoin();



/*************vectorify */


const vectorify = async() =>{
  const respuestaVectorifu = await fetch("https://jsonplaceholder.typicode.com/posts/4");
  const respJson = await respuestaVectorifu.json(); 
  console.log(respJson);
  return respJson;
}

const printVectoriy = async() => {
 const data3 = await vectorify();
 document.querySelector("#vectorifyId").innerHTML = data3.title;
 document.querySelector("#parafoId").innerHTML = data3.body;
}
printVectoriy();