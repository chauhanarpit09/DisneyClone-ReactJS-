import React from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import MovieRows from './MovieRows'
function Home () {
  return (
        <Container>
            <ImgSlider />
            <Viewers /><br/><br/>
            <MovieRows />
        </Container>
  )
}

const Container = styled.main`
    position: relative;
    min-height : calc(100vh - 250px);
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
export default Home
