import  Container  from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav"

function Navigation(): JSX.Element {
    return (
        <Navbar expand="lg" className="nav-bar" 
        bg="light" 
        data-bs-theme="light"
        fixed="top"
        >
            <Container>
                <Navbar.Brand href="/home">
                    Daily Care
                </Navbar.Brand>
                <Nav.Link href="#CBT">CBT</Nav.Link>
                <Nav.Link href="#Breathing">Breathing</Nav.Link>
                <Nav.Link href="#Journal">Journal</Nav.Link>
                <Nav.Link href="#Appts">Therapy Appointments</Nav.Link>
            </Container>
        </Navbar>
    ); 
}

export default Navigation;