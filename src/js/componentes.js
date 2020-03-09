import '../css/componentes.css';

export const saludar = ( nombre ) => {

    console.log(" Esto es una muestra de lo que se esta haciendo solo para funcionar");

    const h1 = document.createElement("h1");
    h1.innerText = `Esto es el texto insertado con un append al Body directamente, ${ nombre }`;
    document.body.append(h1);
}