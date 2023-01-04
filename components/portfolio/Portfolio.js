import React, { useState } from 'react'
import styled from 'styled-components'
import Box from './Box'
import Image from 'next/image'
import imageLoader from '../../utils/imageLoader'
import styles from '../../styles/globals'
import Video from './Video'

const Portfolio = () => {
  const [visible, setVisible] = useState(false)
  const [videoObj, setVideoObj] = useState(null)

  const handleClick = (obj) => {
    setVisible(true)
    setVideoObj(obj)
  }

  return (
    <>
      {visible && <Video setVisible={setVisible} videoObj={videoObj}/>}
      <Container id='portfolio'>
        <styles.Header>
          Portfolio
        </styles.Header>
        <Flex>
          <Box 
            background={'#40006B'}
            text='hover & click'
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
          </Box>
          <Box 
            background={'#7A0011'}
            text='hover & click'
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
              on AWS. It was a summer project with a start up company. Minting website used web3.js technology to connect
              with the Ethereum blockchain.
            </Text>
          </Box>
          <Box 
            background={'#191954'}
            text='hover'
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
            text='hover'
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
  font-size: 18px;
  padding: 30px;
  line-height: 1.4;
`

export default Portfolio