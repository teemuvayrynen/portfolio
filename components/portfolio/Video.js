import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faXmarkCircle
} from '@fortawesome/free-solid-svg-icons'

const Video = ({ setVideoVisible, videoObj }) => {
  return (
    <>
      {videoObj !== null && (
        <Container>
          <Box width={videoObj.width}>
            <Exit 
              onClick={() => { setVideoVisible(false) }}
            >
              <FontAwesomeIcon className='exit-icon'  icon={faXmarkCircle} />
            </Exit>
            <video loop muted className='video' autoPlay style={{ margin: 20 }}>
              <source src={videoObj.src} type="video/mp4" />
            </video>
          </Box>
        </Container>
      )}
    </>
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
  width: ${props => props.width};  
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