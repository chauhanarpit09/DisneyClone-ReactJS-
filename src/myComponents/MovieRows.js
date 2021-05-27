/* eslint-disable prefer-const */
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Row from './Row'
import request from '../request'
import styled from 'styled-components'
import { selectUseremail } from '../feature/user/userSlice'
import db from '../firebasecon'
function MoviewRows () {
  const useremail = useSelector(selectUseremail)
  const [movieid, setmovieid] = useState('')
  const [tvid, settvid] = useState('')
  useEffect(() => {
    if (useremail) {
      db.collection('user')
        .doc(useremail)
        .collection('movie')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) => (
          setmovieid(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data()
            })
            ))))
      db.collection('user')
        .doc(useremail)
        .collection('show')
        .onSnapshot((snapshot) => (
          settvid(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data()
            })))))
    }
  }, [useremail])

  // var random=Math.floor((Math.random() * pack_data.length) + 1); movieid[random]?.data.movieid
  //  <Row title = {''} fetchurl= {req.getrecommendedtv} category = 'show' id="recommend"/>
  // <Row title = {'Recommended for you'} fetchurl= {req.getrecommendedtv} category = 'show' id="recommend"/>
  const req = {
    getrecommendedmovie1: `/movie/${movieid && movieid[0]?.data.movieid}/recommendations?api_key=d2ae966b0bae2a9f7dbc2a38133cb0f8&page=1`,
    getrecommendedtv1: `/tv/${tvid && tvid[0]?.data.tvid}}/recommendations?api_key=d2ae966b0bae2a9f7dbc2a38133cb0f8&page=1`,
    getrecommendedmovie2: `/movie/${movieid && movieid[1]?.data.movieid}/recommendations?api_key=d2ae966b0bae2a9f7dbc2a38133cb0f8&page=1`,
    getrecommendedtv2: `/tv/${tvid && tvid[1]?.data.tvid}}/recommendations?api_key=d2ae966b0bae2a9f7dbc2a38133cb0f8&page=1`,
    getrecommendedmovie3: `/movie/${movieid && movieid[2]?.data.movieid}/recommendations?api_key=d2ae966b0bae2a9f7dbc2a38133cb0f8&page=1`,
    getrecommendedtv3: `/tv/${tvid && tvid[2]?.data.tvid}}/recommendations?api_key=d2ae966b0bae2a9f7dbc2a38133cb0f8&page=1`
  }
  return (
        <Container>
            {movieid.length !== 0
              ? (
                <>
                  <Row title = {'Recommended for you'} fetchurl= {req.getrecommendedmovie1} category = 'movie'/>
                  <Row title = {''} fetchurl= {req.getrecommendedmovie2} category = 'movie'/>
                  <Row title = {''} fetchurl= {req.getrecommendedmovie3} category = 'movie'/>
                </>
                )
              : (
                <None></None>
                )
            }
            {movieid.length === 0 && tvid.length !== 0
              ? (
                <>
                  <Row title = {'Recommended for you'} fetchurl= {req.getrecommendedtv1} category = 'show'/>
                  <Row title = {''} fetchurl= {req.getrecommendedtv2} category = 'show'/>
                  <Row title = {''} fetchurl= {req.getrecommendedtv3} category = 'show'/>
                </>
                )
              : (
                <None></None>
                )
            }
            {movieid.length !== 0 && tvid.length !== 0
              ? (
                <>
                  <Row title = {''} fetchurl= {req.getrecommendedtv1} category = 'show'/>
                  <Row title = {''} fetchurl= {req.getrecommendedtv2} category = 'show'/>
                  <Row title = {''} fetchurl= {req.getrecommendedtv3} category = 'show'/>
                </>
                )
              : (
                <None></None>
                )
            }
            <Row title = {'Latest & Trending'} fetchurl= {request.fetchTrending} />
            <Row title = {'Popular Shows'} fetchurl = {request.fetchpopularshows} category = 'show' />
            <Row title = {'Popular Movies'} fetchurl = {request.fetchpopularmovies} category= 'movie'/>
            <Row title = {'Popular Hindi Movies'} fetchurl = {request.fetchpopularhindi} category= 'movie'/>
            <Row title = {'Popular Hindi Shows'} fetchurl = {request.fetchpopulartvhindi} category= 'movie'/>
            <Row title = {'Top Rated Shows'} fetchurl= {request.fetchratedshows} category = 'show'/>
            <Row title = {'Top Rated Movies'} fetchurl= {request.fetchtopratedmovies} ategory= 'movie'/>
        </Container>
  )
}

const Container = styled.div`
  margin-bottom : 10vh;
`

const None = styled.div`
  display: none;
`
export default MoviewRows
