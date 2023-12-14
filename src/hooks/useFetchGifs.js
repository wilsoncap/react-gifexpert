//// puede ser con extcion js o jsx, depende del caso
// HOOK con la logica de cargar y manejar imagenes
import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";



export const useFetchGifs = ( category ) => {//Asi ya no seria una funcional porque no retorna un jsx

const [images,setImages] = useState([])//inicia images con arreglo vacio
const [isLoading, setIsLoading] = useState(true)// inicia isLoading con true

// otra forma 
const getImages = async()=> {//funcion async
    const newImages = await getGifs(category);//espera hasta que retorne la funcion
    setImages(newImages);//guarda en la variable auxiliar setImages a newImages
    setIsLoading(false);// luego de que sesoluciono lo de la funcion almace en setIsLoading a false
}   //este setIsLoading con valor false solo deja disparar una sola renderizacion


// una forma
 useEffect(() => {
    getImages();
    // getGifs(category)
    //     .then( negImages => setImages(negImages))
 }, []);

    //hook no es mas que una funcion que retorna algo
    return{
        images,
        isLoading
    }

}

//NOta: cuando se carga el setImages despues de hacer la peticion el hook dispara la re-rendezacion
