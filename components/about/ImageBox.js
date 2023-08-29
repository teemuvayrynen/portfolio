import React from 'react'
import styled from 'styled-components'

const ImageBox = () => {

  return (
    <>
      <Container>
        <div style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>
          {":)"}
        </div>
      </Container>
    
    </>
  )
}

const Container = styled.div`
  background: rgb(10, 10, 10);
  width: 350px;
  height: 400px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`


export default ImageBox