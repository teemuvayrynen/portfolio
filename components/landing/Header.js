import React from 'react'
import styled from 'styled-components'

const Header = () => {

  return (
    <>
      <Container>
        <div style={{ marginBottom: 20 }}>
          <TextHeader>
            Hi,
          </TextHeader>
          <TextHeader>
            I&apos;m <span style={{ color: '#006CFA' }}>Teemu</span>
          </TextHeader>
          <TextHeader>
            Web Developer
          </TextHeader>
        </div>
        <Text>
          Highly motivated frontend and backend developer based in Finland. I enjoy developing
          great user experiences with a pinch of style.
        </Text>
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`

const TextHeader = styled.h1`
  color: white;
  font-weight: 400;
  margin: 0;
  font-size: 3rem;
  padding-bottom: 5px;
  
`

const Text = styled.div`
  color: white;
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 400px;
`



export default Header