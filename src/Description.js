import React from 'react';
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import { useState } from 'react';
import './Description.css'

const base_url = "https://image.tmdb.org/t/p/original/";

function Description(state) {
    const movie = state.location.state
    const [trailerUrl, setTrailerUrl] = useState("");


    console.log(movie);

    function truncate(str, n){
        return str?.length > n ? str.substr(0, n-1) +"..." : str;
    }

    const opts = {
        height: '340',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    const handleClick = (movie) => {        
        if(trailerUrl){
            setTrailerUrl("");
        } else{
            // find trailer of movie in youtube
            movieTrailer( movie.name, { tmdbId : movie.id } ).then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"));
            }).catch((error) => console.log(error));
        }
    }


    return (
        <div className='detail_div'>

            <img
              className='detail_img'
              src={`${base_url}${movie.backdrop_path}`}
              alt={movie.name}
            />

            <div>
                <div className={trailerUrl ? 'movie_info2' : 'movie_info1'}>
                    <div className='movie_title'>{movie.title}</div>

                    <div className='date_rate'>
                        <div style={{color: 'white', color: 'red', fontSize: '20px', fontWeight: 480}}>{movie.release_date}</div>
                        <div style={{width: '40px', color: 'red', fontSize: '20px', fontWeight: 480}}></div>
                        <div style={{color: 'white', color: 'red', fontSize: '20px', fontWeight: 480}}>~</div>
                        <div style={{color: 'white', color: 'red', fontSize: '20px', fontWeight: 480}}>{movie.vote_average}</div>
                    </div>
                    
                    <div style={{color: 'red', fontSize: '20px', fontWeight: 480}}>{truncate(movie?.overview, 200)}</div>
                    <div style={{height: '8px'}}></div>
                    <div className='desc_buttons'>
                        <button onClick={() => handleClick(movie)} className='banner_button'>{trailerUrl ? 'Close' : 'Play'}</button>
                        <button className='banner_button'>Add to List</button>
                    </div>
                </div>                
            </div>
            <div className='movie_trailer'>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} /> }
            </div>
        </div>
    )
}

export default Description;
