import React from 'react'
import { useState ,useEffect } from 'react';
import Shimmer from './Shimmer';
const Banner = () => {
  let [movieData, setMovieData] = useState([]);
  let [random , setRandom] = useState(0);
  let getData=()=>{
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDE5MDk4MDA3OTkyNDg2NmM3NjRmYjFjNGMwYzEwNSIsInN1YiI6IjY1OWU4ODdmZmM1ZjA2MDBlZWMwNTc3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dmbV7duYyLODSRvguyFIRcUewilIm8-_AukG05C61lM'
      }
    };
    
    fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
    .then(response => response.json())
    .then(response => setMovieData(response.results))
    .catch(err => console.error(err));
  };
  useEffect(() => {
    getData();
    let rn = Math.floor(Math.random()*10);
    setRandom(rn);
}, [])

  if(movieData.length == 0){
     return <Shimmer></Shimmer>
  }

 
  console.log("Banner Called ")
  return (
     <div  className='text-2xl text-white  bg-no-repeat bg-cover flex flex-col align-bottom justify-end' style={{ backgroundImage :`url(https://image.tmdb.org/t/p/w1280/${movieData[random].backdrop_path})` , height:"70vh"}}>
          <h2 className='ml-4 mb-8 text-6xl font-bold'> {movieData[random].title} </h2>
          <p className="ml-4 mb-8 text-4xl"> {movieData[random].overview} </p>
     </div>
  )
}

export default React.memo(Banner)
     