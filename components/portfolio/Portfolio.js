import React from 'react'
import styled from 'styled-components'
import Box from './Box'
import Image from 'next/image'
import imageLoader from '../../utils/imageLoader'
import styles from '../../styles/globals'

const Portfolio = () => {

  return (
    <>
      <Container id='portfolio'>
        <styles.Header>
          Portfolio
        </styles.Header>
        <Flex>
          <Box 
            background={'#40006B'}
            content={
              <BoxHeader>
                Invoice calculator
              </BoxHeader>
            }
          >
            <video 
              loop muted className='video'
              onMouseOver={e => e.target.play()}
              onMouseOut={e => e.target.pause()}
            >
              <source src='invoice-calculator.mp4' type="video/mp4" />
            </video>
          </Box>
          <Box 
            background={'#7A0011'}
            content={
              <Logo>
                <Image loader={imageLoader} src={'logo-white.png'} layout='fill' alt='logo' />
              </Logo>
           }>
            <video 
              loop muted className='video'
              onMouseOver={e => e.target.play()}
              onMouseOut={e => e.target.pause()}
            >
              <source src='cellar-website3.mp4' type="video/mp4" />
            </video>
          </Box>
          <Box 
            background={'#191954'}
            content={
              <BoxHeader>
                Arbitrage betting app
              </BoxHeader>
            }
          >
            <Text>
              Webscraper built with node.js and docker to scrape bets from different betting sites. Goes through
              all bets and tries to find arbitrage bets. Sends message to telegram when bet was found. 
            </Text>
          </Box>
          <Box 
            background={'#209C90'}
            content={
              <BoxHeader>
                Guitar in blender
              </BoxHeader>
            }
          >
            <video 
              loop muted className='video'
              onMouseOver={e => e.target.play()}
              onMouseOut={e => e.target.pause()}
            >
              <source src='gitar2.mp4' type="video/mp4" />
            </video>
          </Box>
        </Flex>
      </Container>
    </>
  )
}

const Container = styled.div`
  width: 100%;
  margin-bottom: 40px;
`

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`

const Logo = styled.div`
  position: relative;
  width: 120px;
  height: 140px;
`

const BoxHeader = styled.div`
  color: white;
  font-weight: 300;
  font-size: 2rem;
  text-align: center;
`

const Text = styled.div`
  color: white;
  font-size: 1.4rem;
  padding: 30px;
  line-height: 1.4;
`

export default Portfolio