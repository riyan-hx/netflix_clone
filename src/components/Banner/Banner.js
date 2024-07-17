import React, { useEffect, useState } from 'react'
import {API_KEY,imageurl} from '../../constants/constants'
import axios from '../../axios'
import "./Banner.css"
function Banner() {
  const [movie,setmovie] = useState()
  useEffect(() => {
          axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((Response)=>{
            console.log(Response.data.results[0])
            setmovie(Response.data.results[0])
            const movie = Response.data.results;
        if (movie.length > 0) {
          const randomIndex = Math.floor(Math.random() * movie.length);
          setmovie(movie[randomIndex]);
        }
          })
  }, [])
  return (
    <div
    style={{backgroundImage:`url(${movie ? imageurl + movie.backdrop_path:""})`}}
    className='Banner'>
      <div className='content'>
            <h1 className='title'>{movie ? movie.title: ""}</h1>
            <div className='banner_buttons'>
                    <button className='button_banner'>play</button>
                    <button className='button_banner'>my list</button>
            </div>
            <h1 className='description'>{movie ? movie.overview:""}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
