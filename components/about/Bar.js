import React, { useState } from 'react'
import styled from 'styled-components'

const Bar = ({ setCurrent }) => {
  const [color, setColor] = useState('#006CFA')
  const [color1, setColor1] = useState('white')
  const [color2, setColor2] = useState('white')
  
  const changeColor = (c1, c2, c3) => {
    setColor(c1)
    setColor1(c2)
    setColor2(c3)
  }

  return (
    <>
      <Flex>
        <Item color={color} onClick={() => {
          setCurrent(0)
          changeColor('#006CFA', 'white', 'white')
        }}>
          Info
        </Item>
        <Item color={color1} onClick={() => {
          setCurrent(1)
          changeColor('white', '#006CFA', 'white')
        }}>
          Work
        </Item>
        <Item color={color2} onClick={() => {
          setCurrent(2)
          changeColor('white', 'white', '#006CFA')
        }}>
          Education
        </Item>
      </Flex>
    </>
  )
}

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

const Item = styled.div`
  color: ${props => props.color};
  border-color: ${props => props.color};
  font-weight: bold;
  font-size: 1.1rem;
  margin-right: 60px;
  cursor: pointer;
  border-bottom: solid;
  padding-bottom: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
  transition: 300ms;
`

export default Bar