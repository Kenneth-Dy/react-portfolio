import { Container } from 'reactstrap'
import './Footer.css'

const Footer = () => {
  return (
    <Container className='footer' fluid={true} >
      <p className='footerText'>Site Created By: Ken Dy</p>
    </Container>
  )
}

export default Footer