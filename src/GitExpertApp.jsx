import { useState} from 'react'
import { AddCategory, GifGrid } from './components';//archivo index,js como barril


export const GitExpertApp = () => {

  const [categories, setCategories] = useState(['One punch'])
  console.log(categories);
  const onAddCategory = ( newCategory ) => {
    
    if (categories.includes(newCategory)) return;
    // evitar usar el push hasta donde sea posible
    // hay varias formas de hacerlo en react
    // forma 1 
    setCategories([ ...categories, newCategory])

    //Forma 2
    //setCategories( cat => [...categories, 'Dolinchi']);

  }
  return (
    <>
        <h1>GitExpertApp</h1>

      {/* comunicacion entre components */}
      <AddCategory 
        // formas de comunicacion entre componentes

        // 1 forma
        //setCategories={ setCategories }

        // 2 forma
        onNewCategory={ value => onAddCategory(value)}
      />


     
        { 
          categories.map( (category) => ( <GifGrid key={category} category={category}/>))
        }
        {/* <li>ABC</li> */}

        {/* Git Item */}
    </>
  )
}
