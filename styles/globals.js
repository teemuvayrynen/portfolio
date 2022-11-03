import styled from 'styled-components'

const Header = styled.h1`
  color: white;
  font-size: ${props => props.size ? props.size : '2.2rem'};
  text-align: center;
  font-weight: 400;
  margin-bottom: 20px;
`

const styles = {
  Header
}

export default styles
