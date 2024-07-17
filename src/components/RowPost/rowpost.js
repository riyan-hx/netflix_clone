import React,{useState,useEffect} from 'react'
import Youtube from 'react-youtube'
import './RowPost.css'
import axios from 'axios'
import { API_KEY , baseUrl, imageurl } from '../../constants/constants'
function RowPost(props) {
  const [movies,setmovies] = useState ([])
  const [urlid,seturlid] = useState ('')
  useEffect (() => {
        axios.get(props.url).then(Response=>{
          setmovies(Response.data.results)

        })
  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handlemovie = (id)=>{
      axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(Response=>{
            if (Response.data.results.length!==0){
              seturlid(Response.data.results[0])
            }else{
              console.log('array empty')
            }
      })
  }

  return (
    <div>
       <div className='row'>
      <h2>{props.title}</h2>
       <div className='posters'>
        {movies.map((obj)=>
          <img onClick={()=>handlemovie(obj.id)} className={props.isSmall ? 'smallposter' : 'poster'} src={`${imageurl+obj.backdrop_path}`}></img>
          
        ) }
    </div>
    { urlid && <Youtube opts={opts} videoId={urlid.key}/>}
    </div>
    </div>
  )
}

export default RowPost
