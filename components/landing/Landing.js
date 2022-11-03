import React from 'react'
import styled from 'styled-components'
import Header from './Header'

const Landing = () => {


  return (
    <>
      <Container id='home'>
        <Header />
        <video loop muted autoPlay className='guitarAnimation'>
          <source src="gitar2.mp4" type="video/mp4" />
        </video>
      </Container>
    </>
  )
}

const Container = styled.div`
  background: black;
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`

export default Landing