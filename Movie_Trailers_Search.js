import React, { useState } from 'react'

import ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer';


function Movie_Trailers_Search() {

    const[trailer,setTrailer] = useState("")
    const[videourl,setVideourl] = useState("https://www.youtube.com/watch?v=N7JXb-3CK2Y")

    const searchTrailer=()=>{
        movieTrailer(trailer)
        .then((res)=>{setVideourl(res)})
        .catch((error)=>{
            console.error("the error is:",error)
        })
    }
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh',flexDirection:'column',background:"#B0C4DE"}}>
        <h1>Search Movie Trailers Here:</h1>
        <div style={{display:"flex",alignItems:'center',gap:'10px'}}>
            <input className='form-control' type='text' placeholder='Enter Movie Name' onChange={(e)=>{setTrailer(e.target.value)}}/>
            <button className='btn btn-secondary' onClick={()=>searchTrailer()}>Search</button>
        </div>
        <ReactPlayer style={{marginTop:'5px'}} url={videourl} controls={true} width={"90%"} height={'90%'}/>
    </div>
  )
}

export default Movie_Trailers_Search
