import { 
  Container, 
  Row, 
  Col 
} from 'reactstrap'
import Card from '../../components/Card'
import './Portfolio.css'

const Portfolio = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="header">Projects</h1>
        </Col>
      </Row>
      <Row>
        <Col md="4">
          <Card title='Weekndr' text="When you don't know what to do on the weekend and need some fun." github='https://github.com/Kenneth-Dy/weekender' demo='https://thawing-sands-64181.herokuapp.com/' img='./assets/projects/weekndr.png' />
        </Col>
        <Col md="4">
          <Card title="Bartender's Friend" text="Search up the recipe and calories of your favorite cocktails and more." github='https://github.com/Kenneth-Dy/Cocktail-Nutrition' demo='https://smeza314.github.io/Cocktail-Nutrition/' img='./assets/projects/bartender.png' />
        </Col>
        <Col md="4">
          <Card title="Note Taker" text="This project I worked on the backend and wrote the api and view routes. " github='https://github.com/Kenneth-Dy/note-taker' demo='https://boiling-dawn-31636.herokuapp.com/' img='./assets/projects/notetaker.png' />
        </Col > 
      </Row>
      <Row>
        <Col md="4">
          <Card title="Code Quiz" text="Test your knowledge and take this coding quiz. Log your highscore and try to beat it." github='https://github.com/Kenneth-Dy/code_quiz' demo='https://kenneth-dy.github.io/code_quiz/' img='./assets/projects/quiz.png' />
        </Col>
        <Col md="4">
          <Card title="Employee Directory" text="A small project of random employees in a directory made in React." github='https://github.com/Kenneth-Dy/employee-directory' demo='https://kenneth-dy.github.io/employee-directory/' img='./assets/projects/employee.png' />
        </Col>
        <Col md="4">
          <Card title="Weather Dashboard" text="Look up the weather of any city with a current day and five day forecast." github='https://github.com/Kenneth-Dy/weather-dashboard' demo='https://kenneth-dy.github.io/weather-dashboard/' img='./assets/projects/weather.png' />
        </Col>
      </Row>
    </Container>
    
  )

}

export default Portfolio