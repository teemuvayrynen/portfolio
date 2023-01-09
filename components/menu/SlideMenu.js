import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCircleInfo, faBook } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import ContactButton from "../buttons/ContactButton";

const SlideMenu = () => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Container>
        <ButtonContainer>
          <input onChange={() => { setVisible(!visible) }} type='checkbox' id='toggle' checked={visible} />
          <label className="menuButton" htmlFor="toggle"></label>
        </ButtonContainer>
        <MenuContainer visible={visible}>
          <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
            <Link to='home' spy={true} smooth={true} offset={0} >
              <Item onClick={() => { setVisible(false) }}>
                <FontAwesomeIcon icon={faHouse} style={{ paddingRight: 10, paddingTop: 1 }} />
                Home
              </Item>
            </Link>
            <Link to='about' spy={true} smooth={true} offset={420} >
              <Item onClick={() => { setVisible(false) }}>
                <FontAwesomeIcon icon={faCircleInfo} style={{ paddingRight: 10, paddingTop: 2 }} />
                About
              </Item>
            </Link>
            <Link to='portfolio' spy={true} smooth={true} offset={-20} >
              <Item onClick={() => { setVisible(false) }}>
                <FontAwesomeIcon icon={faBook} style={{ paddingRight: 10, paddingTop: 3 }} />
                Portfolio
              </Item>
            </Link>
            <Item>
              <ContactButton />
            </Item>
          </ul>
        </MenuContainer>
        <Background visible={visible} onClick={() => { setVisible(!visible) }} />
      </Container>
    </>
  )
}

const Container = styled.div`
  display: none;
  @media (max-width: 550px) {
    display: block;
  }
`

const MenuContainer = styled.div`
  position: fixed;
  width: 220px;
  height: 100%;
  background: rgb(10, 10, 10);
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  left: ${props => props.visible ? '0px' : '-220px'};
  transition: all 0.2s ease-in;
`

const ButtonContainer = styled.div`
  position: fixed;
  right: 55px;
  top: 40px;
  z-index: 3;
`

const Item = styled.li`
  color: white;
  font-weight: bold;
  font-size: 20px;
  padding: 20px;
  display: flex;
  flex-direction: row;
`

const Background = styled.div`
  position: fixed;
  background: rgba(0,0,0,0);
  width: 100vw;
  height: 100vh;
  z-index: 2;
  display: ${props => props.visible ? 'block' : 'none' };
`

export default SlideMenu