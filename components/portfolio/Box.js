import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import useIntersection from '../../hooks/useIntersection'
import useWindowSize from '../../hooks/useWindowSize'

const Box = (props) => {
  const [backVisible, setBackVisible] = useState(false)
  const ref = useRef()
  const inViewport = useIntersection(ref, '-200px')
  const size = useWindowSize();

  useEffect(() => {
    if (inViewport && size.width <= 550) {
      if (!props.video) {
        setBackVisible(true)
      }
    } else if (!inViewport && size.width <= 550) {
      if (!props.video) {
        setBackVisible(false)
      }
    }
  }, [inViewport, size.width, backVisible])


  return (
    <>
      <Container
        onMouseOver={() => { setBackVisible(true) }}
        onMouseOut={() => { setBackVisible(false) }}
        onClick={props.handleClick}
        ref={ref}
      >
        <Background background={props.background} visible={backVisible}>
          <div style={{ padding: 40 }}>
            {props.content}
            <div style={{ textAlign: 'center', color: 'rgb(170, 170, 170)', marginTop: 20 }}>{props.text}</div>
          </div>
        </Background>
        {props.children}
      </Container>
    </>
  )
}

const Container = styled.div`
  position: relative;
  width: 250px;
  height: 420px;
  margin: 20px;
  border-radius: 20px;
  cursor: pointer;
  transition: 500ms;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(16, 16, 16);
  box-shadow: 0px 0px 10px black;
  &:hover {
    transform: scale(1.04)
  }
`

const Background = styled.div`
  position: absolute;
  background: ${props => `linear-gradient(to top right,${props.background},rgb(10,10,10));`}
  width: 101%;
  height: 101%;
  border-radius: 20px;
  transition: 500ms;
  overflow: hidden;
  z-index: ${props => props.visible ? '-1' : '0'};
  opacity: ${props => props.visible ? '0' : '1'};
  left: -2px;
  top: -1px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export default Box
