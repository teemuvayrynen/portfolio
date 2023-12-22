import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import styles from '../../styles/globals'

const Info = () => {

  return (
    <>
      <Container>
        <styles.Header size={'2rem'}>
          About Me
        </styles.Header>
        <SecondHeader>
          23 years   <span style={{ color: 'grey' }}>/</span>   Student
        </SecondHeader>
        <Text>
          Junior full-stack web developer with a growth mindset and keen to learn new things.
          {" Currently studying computer science at Aalto University for the fourth year. "}
          I have a good experience using modern technologies to design and develop customer-centric
          applications for all kinds of projects.
        </Text>
        <SecondHeader>
          Work experience:
        </SecondHeader>
        <ul>
          <ListItem>Savox Communications Oy</ListItem>
          <ListItem>Cellar64 project</ListItem>
          <ListItem>Bronion Oy</ListItem>
        </ul>
        <SecondHeader>
          Skills:
        </SecondHeader>
        <ul>
          <ListItem>Javascript, Typescript, Python, Swift, C++</ListItem>
          <ListItem>React, React Native, Next.js, Web3.js, Expo, Node.js, </ListItem>
          <ListItem>AWS, Firebase, Terraform</ListItem>
          <ListItem>Docker, MongoDB</ListItem>
        </ul>
        
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  padding: 0px 20px;
`

const Text = styled.div`
  color: white;
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 16px
`

const SecondHeader = styled.div`
  color: #006CFA;
  font-size: 1.2rem;
  margin-bottom: 16px;
`

const ListItem = styled.li`
  color: white;
  font-size: 1rem;
  font-weight: bold;
  padding-bottom: 10px;
`

export default Info