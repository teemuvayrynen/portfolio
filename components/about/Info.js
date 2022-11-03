import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import Bar from './Bar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faPerson, 
  faCakeCandles, 
  faEnvelope, 
  faMobileScreen, 
  faPassport,
  faSchool,
  faBuildingColumns
} from '@fortawesome/free-solid-svg-icons'
import styles from '../../styles/globals'

const Info = () => {
  const [current, setCurrent] = useState(0)


  return (
    <>
      <Container>
        <styles.Header size={'2rem'}>
          About Me
        </styles.Header>
        <Text>
          Highly motivated frontend and backend developer based in Finland. I enjoy developing
          great user experiences using latest technologies with a pinch of style.
        </Text>
        <Bar setCurrent={setCurrent} />
        {(() => {
          if (current == 0) {
            return (
              <Flex key={current}>
                <Item>
                  <FontAwesomeIcon className='about-icon' icon={faPerson} />
                  Name          :     Teemu Väyrynen
                </Item>
                <Item>
                  <FontAwesomeIcon className='about-icon' icon={faCakeCandles} />
                  Age           :     22
                </Item>
                <Item>
                  <FontAwesomeIcon className='about-icon' icon={faEnvelope} />
                  Mail          :     test@test.fi
                </Item>
                <Item>
                  <FontAwesomeIcon className='about-icon' icon={faMobileScreen} />
                  Phone         :     +3584567890
                </Item>
                <Item>
                  <FontAwesomeIcon className='about-icon' icon={faPassport} />
                  Nationality   :     Finland
                </Item>
              </Flex>  
            )
          } else if (current == 1) {
            return (
              <Flex key={current}>
                <Item>
                  <FontAwesomeIcon className='about-icon' icon={faPerson} />
                  Rolan Oy  :   Van driver and electric scooter charging
                </Item>
                <Item>
                  <FontAwesomeIcon className='about-icon' icon={faCakeCandles} />
                  Jespars Oy  :   Boat repairman and boat trailer driver
                </Item>
                <Item>
                  <FontAwesomeIcon className='about-icon' icon={faCakeCandles} />
                  Bronion Oy  :   Full Stack Developer
                </Item>
              </Flex>
            )
          } else if (current == 2) {
            return (
              <Flex key={current}>
                <Item>
                  <FontAwesomeIcon className='about-icon' icon={faSchool} />
                  High school   :    Kauniaisten lukio
                </Item>
                <Item>
                  <FontAwesomeIcon className='about-icon' icon={faBuildingColumns} />
                  University    :    Aalto yliopisto Computer Science
                </Item>
              </Flex>
            )
          } else { null }
        })()}
      </Container>
    </>
  )
}

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  max-width: 500px;
`

const fade = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`

const Text = styled.div`
  color: white;
  font-weight: bold;
  font-size: 0.9rem;
  line-height: 1.6;
`

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  animation: 2s ${fade};
`

const Item = styled.pre`
  color: white;
  font-weight: bold;
  font-size: 1rem;
  margin: 5px 0px;
`

export default Info