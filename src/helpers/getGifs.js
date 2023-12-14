export const getGifs = async(category) => {//tienes que esperar hasta que se de la peticion

    const url = `https://api.giphy.com/v1/gifs/search?api_key=4pjqyAHRycbn2qXv5GrvbAxsxWOFHRXz&q=${category}&limit=10`
    const resp = await fetch(url);// espere hasta que peticon llegue
    const { data } = await resp.json()// espere mientras destructura la data de esa respuesta json

    const gifs = data.map( img => ({// va a iterar por cada item de data y me va contruir un objeto
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }))

    return gifs; // ese objeto de objetos es el que me vas a retornar
  }