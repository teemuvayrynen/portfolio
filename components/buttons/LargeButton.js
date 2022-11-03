import React from "react"
import styled from "styled-components"

const LargeButton = ({ text, type, disabled }) => {


  return (
    <>
      <Button type={type} disabled={disabled}>
        {text}
      </Button>
    </>
  )
}

const Button = styled.button`
  background: red;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  border-radius: 20px;
  padding: 10px;
  width: 108%;
  margin: 10px 0px;
  cursor: pointer;
  transition: 300ms;
  border: 0;
  &:hover {
    background: white;
    color: #006CFA;
  }
`

export default LargeButton