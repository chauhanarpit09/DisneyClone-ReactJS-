import React from 'react'
import Row from './Row'
import request from '../request'
import styled from 'styled-components'
function MoviewRows () {
  return (
        <Container>
            <Row title = {'Latest & Trending'} fetchurl= {request.fetchTrending} />
            <Row title = {'Popular Shows'} fetchurl = {request.fetchpopularshows} category = 'show' />
            <Row title = {'Popular Movies'} fetchurl = {request.fetchpopularmovies} category= 'movie'/>
            <Row title = {'Top Rated Shows'} fetchurl= {request.fetchratedshows} category = 'show'/>
            <Row title = {'Top Rated Movies'} fetchurl= {request.fetchtopratedmovies} ategory= 'movie'/>
        </Container>
  )
}

const Container = styled.div`
  margin-bottom : 10vh;
`
export default MoviewRows
