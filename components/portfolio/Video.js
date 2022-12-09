import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faXmarkCircle
} from '@fortawesome/free-solid-svg-icons'

const Video = ({ setVisible }) => {
  

  return (
    <Container>
      <Box>
        <Exit 
          onClick={() => { setVisible(false) }}
        >
          <FontAwesomeIcon className='exit-icon'  icon={faXmarkCircle} />
        </Exit>
        <video 
          loop muted className='video'
          onMouseOver={e => e.target.play()}
          onMouseOut={e => e.target.pause()}
          
        >
          <source src='cellar-website.mp4' type="video/mp4" />
        </video>
      </Box>
    </Container>
  )


}

const Container = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  width: 70%;
  height: auto;
`

const Exit = styled.button`
  border: none;
  background: none;
  cursor: pointer;

  &hover: {
    color: #006CFA;
  }
`

export default Video