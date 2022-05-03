import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { Search } from './Search'
import { Recipe } from './Recipe'
import character from "./types";

export const RecipeList = () =>{
const APP_ID = "271d5f2f";
const APP_KEY = "88fd0eadad48157387707fa0a2eefafb";
const[search, setSearch] = useState('egg')
const[recipelist, setRecipelist] = useState<Array<character>>([])


//const {recipe:{image},recipe:{label}} = recipelist

const consultarApi = async () =>{
    if(search === '' ) return;
    let recipesArray:Array<character>=[]
    const URL =  `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    const respuesta = await axios.get(URL)
    let resp = respuesta.data.hits
    resp.forEach((item:any)=>{
        recipesArray.push({
           id:item.recipe.label,
           image:item.recipe.image ,
           label:item.recipe.label
        }) 
     })

    setRecipelist(recipesArray)
}
 useEffect(()=>{
     consultarApi()
     // eslint-disable-next-line
 },[search])

    return(
        <>
        <div className="container">
          <div className="l-container">
              <Search setSearch = {setSearch}/>
              <div className="container-card">
                  {recipelist.length===0?(
                      <h2>Cargando ...</h2>
                  ):(
                    recipelist.map( res =>(
                      <Recipe 
                      key = {res.id}
                      res = {res}
                      />
                    ))
              )}
              </div>
         </div>
       </div>
        </>
    )
}