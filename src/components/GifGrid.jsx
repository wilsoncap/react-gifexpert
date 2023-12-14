// Primero React

//Importaciones de terceros
import { GitItem } from "./GitItem";
//Funciones que no son componentes o hooks
import { useFetchGifs } from "../hooks/useFetchGifs";





export const GifGrid = ({ category }) => {

// forma con hooks
const { images, isLoading } = useFetchGifs( category);

// forma sin hooks    
/*const [images,setImages] = useState([])

// otra forma 
const getImages = async()=> {
    const newImages = await getGifs(category);
    setImages(newImages);
}


// una forma
 useEffect(() => {
    getImages();
    // getGifs(category)
    //     .then( negImages => setImages(negImages))
 }, [])

  getGifs(category);*/

  return (
    <>
        <h3>{ category }</h3>
        
        {/* 1 forma */}
        {/* {
            isLoading
            ? (<h2>Cargando...</h2>)
            : null
        } */}

        {/* 2 forma */}
        {
            isLoading && (<h2>Cargando...</h2>)
        }
        
        <div className="card-grid">
            {
                images.map((image) => (
                    // <li key={id}>{title}</li>
                    <GitItem 
                    key={image.id}
                    { ...image}
                    />
                ))

            }
        </div>
    </>
  )
}
