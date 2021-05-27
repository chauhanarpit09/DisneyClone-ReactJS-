/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function SearchedMovies (props) {
  const baseUrl = 'https://image.tmdb.org/t/p/original/'
  return (
        <Container>
            <MovieContainer>
                {props.data && props.data.map(data => (
                    <Link to={`/movie/${data.id}/${data.first_air_date ? 'show' : 'movie'}`} key = {data.id }>
                        <Detail>
                            <Image
                            src={`${baseUrl}${data?.poster_path || data?.backdrop_path}`}
                            onError={(e) => { e.target.onerror = null; e.target.src = './assets/images/default.jpg' }}
                            alt = {data.original_title}
                            loading="lazy"/>
                            <Title>
                                <h5>{data?.original_title || data?.title || data?.name}</h5></Title>
                        </Detail>
                    </Link>
                ))}
            </MovieContainer>
        </Container>
  )
}

const Container = styled.div`
    margin-top: 200px
    min-height: 100vh;
`
const MovieContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    width: 98%;
    hieght: 100%;
    @media (max-width : 1200px){
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    @media (max-width : 800px){
        grid-template-columns: 1fr 1fr;
        margin-left: -30px;
    }
`
const Detail = styled.div`
    margin: 30px;
    position: relative;
    width: 100%;
    height: 80%;
    translate: transfrom 200ms;
    cursor: pointer;
    border-radius: 10px;

    &:hover {
        transform: scale(1.09);
    }
    @media (max-width : 800px){
       pointer-events: none;
       width: 80%;
    }
`
const Title = styled.div`
    position: absolute;
    top: 80%;
    left: 30%;

`
const Image = styled.img`
    backface-visibility: hidden;  
    position: relative;
    display: block;
    margin: 10px;
    width: 100%;
    height: 100%;
    padding: 20px;
    object-fit: contain;
`

export default SearchedMovies
