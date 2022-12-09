import React, { useState } from 'react'
import styled from 'styled-components'

const Box = (props) => {
  const [visible, setVisibe] = useState(false)

  return (
    <>
      <Container
        onMouseOver={() => { setVisibe(true) }}
        onMouseOut={() => { setVisibe(false) }}
        onClick={props.handleClick}
      >
        <Background background={props.background} visible={visible}>
          <div style={{ padding: 40 }}>
            {props.content}
            <div style={{ textAlign: 'center', color: 'rgb(120, 120, 120)', marginTop: 20 }}>{props.text}</div>
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
  justify-content: center;
  align-items: center;
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
