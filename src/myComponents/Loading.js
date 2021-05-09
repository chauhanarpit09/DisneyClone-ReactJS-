import React from 'react'
import styled from 'styled-components'
import Loader from 'react-loader-spinner'

function Loading () {
  return (
        <Container>
            <Loader
                type='ThreeDots'
                color='#fff'
                height={100}
                width={100}
                timeout={100000}
            />
        </Container>
  )
}

const Container = styled.div`
    height: 20vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

export default Loading
