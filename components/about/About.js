import React from 'react'
import styled from 'styled-components'
import Info from './Info'
import ImageBox from './ImageBox'

const About = () => {

  return (
    <>
      <Container id='about'>
        <Flex>
          <ImageBox />
          <Info />
        </Flex>
      </Container>
    </>
  )
}

const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 20px 0px;
  background-color: rgb(25, 25, 25);
  z-index: 1;
`

const Flex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`

export default About