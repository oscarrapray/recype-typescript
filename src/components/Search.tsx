import React, { useState } from 'react'
import Error from './Error'
import logo from '../img/search-icon.svg'

export const Search = ({setSearch}) =>{
  
  const [ termino, setTermino] = useState('')
  const [error, setError] = useState(false);

  const onSearchChange = (e):void => {
    setTermino(e.target.value)
    
}
const handleSubmit = e => {
  e.preventDefault();

  // validar
  if(termino.trim() === '') {
     setError(true);
      return;
  }
  setError(false);
  // enviar el termino de búsqueda hacia el componente principal
  setSearch(termino);
}

    return(
      <form onSubmit={handleSubmit} className="sec-search">
      <div className="SearchBox">
        <img src={logo} alt = "imagen"  className="SearchIcon"/>
        <input className="SearchInput"
        name = "termino"
        value ={termino}
        onChange = {onSearchChange}
        />
      </div>
      <div className="item-btn">
            <input type="submit" value="Buscar" className='btn_enviar'/>
      </div>
      { error ? <Error mensaje="Agrega un término de búsqueda" /> : null }
        </form>
        
    )
}