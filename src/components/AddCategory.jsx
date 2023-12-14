import { useState } from "react";

useState

// desestructuro la props que me esta llegando el padre
export const AddCategory = ({ onNewCategory }) => {

 const [inputValue, setInputValue] = useState(['']) 

 const OnInputChange = ({ target }) => {
    console.log(target.value);
    setInputValue(target.value);
 }

 const onSubmit = (event)=>{
    event.preventDefault();
    if(inputValue.trim().length <= 1) return;
    // uso la props que me llega del padre
    //setCategories( categories => [ inputValue, ...categories])

    onNewCategory(inputValue.trim());
    setInputValue(' ');
 }

  return (
    <form onSubmit={(event) => onSubmit(event)}>
    {/* <form onSubmit={onSubmit}> */}
        <input 
            type="text"
            placeholder="Buscar gifs"
            onChange={(event) => OnInputChange(event)}
        />
    </form>
    
  )
}
