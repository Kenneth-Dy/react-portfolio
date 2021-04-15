import { Card,  
  CardTitle, 
  CardText,
  CardImg,
  CardLink, 
  CardBody
} from 'reactstrap'

const aCard = (props) => {
  const cardStyle = {
    marginTop: '3vh'
  }
  return (
    <Card style={cardStyle}  outline color="secondary">
      <CardImg src={props.img} alt='Project Front Page' />
      <CardBody>
        <CardTitle tag="h5">{props.title}</CardTitle>
        <CardText>{props.text}</CardText>
        <CardLink href={props.github}>Github</CardLink>
        <CardLink href={props.demo}>Demo</CardLink>
      </CardBody>
    </Card>
  )
}

export default aCard