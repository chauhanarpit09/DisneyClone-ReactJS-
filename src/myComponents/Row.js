/* eslint-disable react/prop-types */
import axios from '../axios'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import Loading from './Loading'
import StarsIcon from '@material-ui/icons/Stars'

const baseUrl = 'https://image.tmdb.org/t/p/original/'

function Row (props) {
  const [movies, setmovies] = useState([])
  useEffect(() => {
    async function fetchData () {
      const req = await axios.get(props.fetchurl)
      setmovies(req.data.results)
      return req
    }
    fetchData()
  }, [props.fetchurl])

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true
        }
      }
    ]
  }

  function truncate (str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '..' : str
  }

  if (movies) {
    return (
        <>
        { movies.length !== 0
          ? <div style={{ maxheight: '250px' }}><br/>
            {movies ? <h2>{ props.title }</h2> : '' }
            <MovieRow {...settings}>
                {movies.map(movie => (
                <div key={movie.id}>
                    <Link to={`/movie/${movie.id}/${movie.first_air_date ? 'show' : 'movie'}`}>
                      <Conatiner>
                        <Link to={`/movie/${movie.id}/${movie.first_air_date ? 'show' : 'movie'}`}>
                          <Image
                            className="image"
                            src={`${baseUrl}${movie.poster_path}`}
                            onError={(e) => { e.target.onerror = null; e.target.src = './assets/images/default.jpg' }}
                            loading = 'lazy'
                            alt=" "/>
                        </Link>
                        <Hover className="info">
                            <h5>{movie?.original_title || movie?.title || movie?.name}<span><StarsIcon style={{ fontSize: '14px' }}/>&nbsp;{movie?.vote_average}</span></h5>
                            <p>{truncate(movie?.overview, 50)}</p><br/>
                        </Hover>
                      </Conatiner>
                    </Link>
                </div>
                ))}
            </MovieRow>
        </div>
          : '' }
        </>
    )
  } else {
    return (
      <Loading />
    )
  }
}

const MovieRow = styled(Slider)`
    cursor: pointer;
    & > button {
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: 1;
    }
    &:hover button{
        opacity: 1;
        transition: opacity 0.2s ease 0s;
    }

    .slick-track {
      overflow: hidden;
    }
    .slick-list {
       overflow: initial;
    }
  
    .slick-prev{
        left:-5vw;
    }
    .slick-next{
        right:-5vw;
    }
    @media (max-width : 700px){
        .slick-next{
            display: none;
        }
    }

   div {
     position: relative;
     border: none;
     padding-left: 5px;
     min-height: 200px;
     max-height: 260px;

     @media (max-width : 1300px){
        max-height: 200px;
        padding-left: -5px;
    }

     
   }

    
`
const Conatiner = styled.div`
   position: relative;
   max-height:250px;
   min-height: 200px;
   &:hover .info{
     opacity: 1;
   }

   &:hover .image{
     transform: scale(1.15);
   }

   @media (max-width : 700px){
      pointer-events: none;
    }

  .info {
    @media (max-width : 1000px){
        display: none;  
    }
  }
`

const Hover = styled.div`
   width: 115%;
   border-radius: 10px;
   height: 100% auto;
   position: absolute;
   background : linear-gradient(180deg, transparent, #283858, #0c111b,#000000);
   opacity: 0;
   left: 50%;
   transform: translate(-50%, -40%);
  -ms-transform: translate(-50%, -50%);
   transition: .5s ease;
   margin-bottom: 20%;

   h5 {
      font-size: 14px;
      margin-bottom: -8px;
   }
  span{
      margin-left: 1em;
   }
   p {
     font-size: 13px;
   }
`

const Image = styled.img`
    position: relative;
    display: block;
    backface-visibility: hidden;   
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: transform 100ms 0s;
    transition: .5s ease;
    border-radius: 5px;

    @media (max-width : 700px){
      border-radius: 0px;
      padding-right: 6px;
      object-fit: contain;
    }
`

export default Row
