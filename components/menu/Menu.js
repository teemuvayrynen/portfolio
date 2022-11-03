import React from 'react'
import styled from 'styled-components'
import Item from './Item'
import ContactButton from '../buttons/ContactButton'

const Menu = () => {


  return (
    <>
      <Container>
        <Item to='home' offset={0}>
          Home
        </Item>
        <Item to='about' offset={-60}>
          About
        </Item>
        <Item to='portfolio' offset={-100}>
          Portfolio
        </Item>
        <Element>
          <ContactButton />
        </Element>
      </Container>
    </>
  )
}

const Container =  styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-left: 30px;
  background: black;
  height: 80px;
  z-index: 1;
  box-shadow: 0px 0px 10px black;
`

const Element = styled.div`
  position: absolute;
  right: 60px;
  top: 20px;
`

export default Menu