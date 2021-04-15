import { 
  Container, 
  Row,
  Col,
  List
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
          <h2 className='header'>About Me</h2>
          <p className="block">My name is Kenneth Dy and I go by Ken most of the time. I'm currently enrolled in the UC Irvine Continuing Education Coding Boot Camp learning how to be a full stack developer. I am almost finished and this site is meant to showcase my skills through the projects I've completed. This site is made from React and the Reactstrap library. 
          </p>
          <p className="block">
            For fun I enjoy attending music festivals and shows. I feel that the energy in the crowd can't be beat and just gets me jumping of my feet. I also enjoy musicals and make it a point to go to the theater and watch a show at least once every six months. Just like festivals I get drawn into the music and the actors on stage. Another thing I enjoy is video games, escpecially rpg's and shooters. I enjoy relaxing either playing by myself or with friends online.
          </p>
        </Col>
        <Col className='rightStyle'>
          <h3 className='header'>Contact</h3>
          <List type='unstyled'>
            <li>
              Email: kennethndy@yahoo.com
              </li>
            <li>
              Phone: 510-529-8080
              </li>
          </List>
          <h3>Resume</h3>
            <a href='./assets/Kenneth_Dy_Resume.pdf'>Link</a>
          <h3 className='header'>Social</h3>
            <a href='https://linkedin.com/in/kenneth-dy-506496170'><i class="fab fa-linkedin fa-3x"></i> </a>
            <a href='https://github.com/Kenneth-Dy'><i class="fab fa-github-square fa-3x"></i> </a>

        </Col>
      </Row>
    </Container>
  )
}

export default About