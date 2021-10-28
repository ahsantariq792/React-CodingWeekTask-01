import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SearchAppBar() {

    function logout(){
        if(localStorage.getItem('name')){
            localStorage.clear()
            alert('log out')
        }
        else{
            alert("Login First")
        }

    }
    return (
        <>
            <Navbar bg="success" expand="lg">
                <Container>
                    <Navbar.Brand className="nav-main">React-Form</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                            <li>
                                <Link to="/" className="nav-itms">Signin</Link>
                            </li>
                           
                            <li>
                                <Link to="/login" className="nav-itms">Login</Link>
                            </li>

                            <li>
                                <Link to="/profile" className="nav-itms">Profile</Link>
                            </li>

                            {/* <li>
                                <Link to="/dashboard" className="nav-itms">Dashboard</Link>
                            </li> */}

                            <li>
                                <Link onClick={logout} to="/login" className="nav-itms">Logout</Link>
                            </li>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default SearchAppBar;