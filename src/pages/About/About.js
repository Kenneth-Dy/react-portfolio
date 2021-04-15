import { 
  Container, 
  Row,
  Col
} from 'reactstrap'
import './About.css'
const About = () => {



  return (
    <Container>
      <Row>
        <img src="./assets/snow_pic_2by1.jpg" alt="Cover" className='imgStyle'></img>
      </Row>
      <Row>
        <Col className='leftStyle'>
          <h2>About Me</h2>
        </Col>
        <Col className='rightStyle'>
          <h2>More Info</h2>
        </Col>
      </Row>
    </Container>
  )

}

export default About