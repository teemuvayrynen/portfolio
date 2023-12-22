import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import Box from './Box'
import Image from 'next/image'
import imageLoader from '../../utils/imageLoader'
import styles from '../../styles/globals'
import Video from './Video'
import useWindowSize from '../../hooks/useWindowSize'

const Portfolio = () => {
  const [videoVisible, setVideoVisible] = useState(false)
  const [videoObj, setVideoObj] = useState(null)
  const size = useWindowSize()

  const handleClick = (obj) => {
    setVideoVisible(true)
    setVideoObj(obj)
  }

  return (
    <>
      {videoVisible && <Video setVideoVisible={setVideoVisible} videoObj={videoObj}/>}
      <Container id='portfolio'>
        <styles.Header>
          Portfolio
        </styles.Header>
        <Flex>
          <Box 
            background={'#40006B'}
            text='hover & click'
            video={false}
            handleClick={() => {
              handleClick({ src: 'splitbill2.mp4', width: '20%' })
            }}
            content={
              <BoxHeader>
                Split bill
              </BoxHeader>
            }
          >
            <Text>
              IOS application built with SwiftUI. It allows user to split bill with another person by taking picture of the bill
              and using vision api to gather bill data from the image. After processing and choosing which product belongs to who,
              it calculates how much the person owns you.
            </Text>
            <div style={{ color: 'rgb(150, 150, 150)', fontWeight: 'bold', display: size.width <= 550 ? 'block' : 'none', fontSize: 14 }}>
              Click
            </div>
          </Box>
          <Box 
            background={'#7A0011'}
            text='hover & click'
            video={false}
            handleClick={() => {
              handleClick({ src: 'cellar-website2.mp4', width: '70%' })
            }}
            content={
              <Logo>
                <Image loader={imageLoader} src={'logo-white.png'} layout='fill' alt='logo' />
              </Logo>
           }>
            <Text>
              Ethereum based NFT project developed by me. It included main and minting website both built with next.js and hosted
              on AWS. It was a summer project with a small team from Aalto University. Minting website used web3.js technology to connect
              with the Ethereum blockchain.
            </Text>
            <div style={{ color: 'rgb(150, 150, 150)', fontWeight: 'bold', display: size.width <= 550 ? 'block' : 'none', fontSize: 14 }}>
              Click
            </div>
          </Box>
          <Box 
            background={'#191954'}
            text='hover'
            video={false}
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
            content={
              <BoxHeader>
                Guitar in blender
              </BoxHeader>
            }
            video={true}
          >
            <video 
              loop 
              muted 
              className='video'
              autoPlay
              playsInline
            >
              <source src='gitar720.mp4' type="video/mp4"/>
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
  font-size: 16px;
  padding: 30px;
  line-height: 1.4;
`

export default Portfolio