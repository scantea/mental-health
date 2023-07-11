import homeImage from '../assets/images/home.png'
import homeImage2 from '../assets/images/homeTwo.png'
import homeImage3 from '../assets/images/homeThree.png'
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


function Home():JSX.Element {
    return (
        <div className="homepage">
            <Card className='cardOne'style={{height:500}}>
                <Card.Img src={homeImage}/>
                <Card.ImgOverlay>
                    <Card.Title>Maintaining Mental Health Takes Practice, We can Help</Card.Title>
                    <Card.Text>Invest in your relationship with yourself</Card.Text>
                    <Card.Text>Anxiety Management Skills</Card.Text>
                    <Button>CBT Practice</Button>
                </Card.ImgOverlay>
            </Card>
            <Card className='cardTwo'style={{height:500}}>
                <Card.Img src={homeImage2}/>
                <Card.ImgOverlay>
                    <Card.Title>Interested in Meditation and Mindfulness?</Card.Title>
                    <Card.Text>Breathing Excercises can have an immediate impact on your nervous system</Card.Text>
                    <Card.Text>Check out some tips!</Card.Text>
                    <Button>Breathing Excercises</Button>
                </Card.ImgOverlay>
            </Card>
            <Card className='cardThree'style={{height:500}}>
                <Card.Img src={homeImage3}/>
                <Card.ImgOverlay>
                    <Card.Title>Keep track of your thoughts, and get it all out</Card.Title>
                    <Card.Text>Journaling can add to emotional awareness and can help you identify triggers</Card.Text>
                    <Card.Text>Get Started Now</Card.Text>
                    <Button>My Journal</Button>
                </Card.ImgOverlay>
            </Card>
        </div>
    )

}

export default Home;