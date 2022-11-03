import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'

const Item = (props) => {
  const [visible, setVisible] = useState(false)
  
  return (
    <>
      <Link to={props.to} spy={true} smooth={true} offset={props.offset}>
        <Container visible={visible}
          onMouseEnter={() => { setVisible(true)}}
          onMouseLeave={() => { setVisible(false)}} 
        >
          {props.children}
          <Border visible={visible} />
        </Container>
      </Link>
    </>
  )
}

const Container = styled.h1`
  color: ${props => props.visible ? '#006CFA' : 'white'};
  display: flex;
  flex-direction: column;
  margin: 30px 30px;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.3s;
`

const Border = styled.div`
  background: #006CFA;
  height: 2px;
  width: 100%;
  margin-top: 10px;
  transition: transform 0.3s linear;
  transform-origin: left;
  transform-style: preserve-3D;
  transform: ${props => props.visible ? 'scale(1)' : 'scale(0)'}
`

export default Item