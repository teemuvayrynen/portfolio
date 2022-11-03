import React from 'react'
import styled from 'styled-components'

const ContactButton = () => {

  return (
    <>
      <Container onClick={(e) => {
        window.location.href = 'mailto:teemu@vayrynen.fi'
      }}>
        Contact
      </Container>
    </>
  )
}

const Container = styled.div`
  background: #006CFA;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  border-radius: 30px;
  padding: 10px 0px;
  width: 110px;
  cursor: pointer;
  transition: 300ms;

  &:hover {
    background: white;
    color: #006CFA;
  }

`

export default ContactButton