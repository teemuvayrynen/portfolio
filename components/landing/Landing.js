import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Image from 'next/image'
import imageLoader from '../../utils/imageLoader'
import useWindowSize from '../../hooks/useWindowSize'

const Landing = () => {
  const size = useWindowSize();

  return (
    <>
      <Container id='home'>
        <Header />
        <FlexBox>
          <Img width={size.width} className='bounce'>
            <Image loader={imageLoader} src={'ios-person.png'} layout='fill' alt='animatedImage'/>
          </Img>
        </FlexBox>
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

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  z-index: 0;
`

const Img = styled.div`
  position: relative;
  display: ${props => props.width <= 800 ? 'none' : 'block'};
  width: 500px;
  height: 500px;
  min-height: 500px;
  min-width: 500px;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  
`

export default Landing