import React, { useState } from 'react'
import axios from '../axios'
import SearchedMovies from './SearchedMovies'
import styled from 'styled-components'
import { IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import Loader from 'react-loader-spinner'
// import { useParams } from 'react-router'

function Search () {
  const [query, setquery] = useState('')
  const [data, setdata] = useState()
  let request = {
    search: `/search/multi?api_key=d2ae966b0bae2a9f7dbc2a38133cb0f8&query=${query}&page=1&include_adult=false`
  }
  async function fetchData () {
    console.log(query)
    const req = await axios.get(request.search)
    setdata(req.data.results)
    return req
  }

  const search = (e) => {
    if (query !== '') {
      e.preventDefault()
      setdata('')
      request = {
        search: `/search/multi?api_key=d2ae966b0bae2a9f7dbc2a38133cb0f8&query=${query}&page=1&include_adult=false`
      }
      fetchData()
    } else {
      setquery('')
      setdata('')
    }
  }

  return (
        <Container>
            <FormContainer>
                <Formthings>
                    <Form>
                        <IconButton onClick={(e) => { search(e) } } type="submit"><Searchicon /></IconButton>
                        <input type="text" value = {query} onChange = {(e) => { setquery(e.target.value) }} placeholder="Type and click on search icon" />
                    </Form>
                </Formthings>
            </FormContainer>
            {data ? <SearchedMovies data={data}/> : '' }
            {!data && query
              ? <LoaderContainer>
                  <Loader
                        type='ThreeDots'
                        color='#fff'
                        height={60}
                        width={60}
                        timeout={100000}
                    />
                </LoaderContainer>
              : '' }
        </Container>
  )
}

const Container = styled.main`
    position: relative;
    min-height : 100vh;
    overflow: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
    &:-webkit-scrollbar{
        display: none;
    }
    
&:after {
    background: url("./assets/images/home-background.png") center center / cover
    no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }


`
const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
  width: 90%;

`

const Formthings = styled.div`
  background-color: #0c111b;
  width: 80%;
  padding: 10px;
  border-radius: 5px;
`

const Form = styled.form`
    input {
        outline: none;
        border:none;
        width: 85%;
        color: white;
        background-color: #0c111b;

        @media (max-width: 700px){
            width: 70%;
        }
    }
    button {
        width:
    }
`
const Searchicon = styled(SearchIcon)`
    font-size: 30px;
    color: white;
`

const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 200px;
`
export default Search
