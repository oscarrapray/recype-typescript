import React from 'react'
import character from "./types"
//import {Link} from 'react-router-dom'
interface props {
  res:character
}

export const Recipe = ({res}:props) =>{
  const {image,label} = res
  return(
    <div className="card">
            <div className="card-img">
              <img src={image} alt="recipe"/>
            </div>
              <div className="movie-name">
               <span >{label}</span>
              </div>
              <div className="info-movie">
              </div>
    </div>
)
}