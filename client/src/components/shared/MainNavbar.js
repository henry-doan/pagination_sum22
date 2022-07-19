import { Link } from 'react-router-dom';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Nav, Container, Navbar } from 'react-bootstrap';

const MainNavbar = ({ user, handleLogout }) => {

  const rightNavItems = () => {
    // links to show up if the user is logged in
    if (user) {
      return (
        <Nav className="me-auto">
          <Nav.Link>
            <Link to='/languages'>
              Langauges
            </Link>
          </Nav.Link>
          <Nav.Link onClick={() => handleLogout()}>
            Logout
          </Nav.Link>
        </Nav>
      )
    } else {
      // links to show up when they are not logged in
      return (
        <>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to='/login'>
                Login
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/register'>
                Register
              </Link>
            </Nav.Link>
          </Nav>
        </>
      )
    }
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <Link to='/'> Home</Link>
          </Navbar.Brand>
          { rightNavItems() }  
        </Container>
      </Navbar>
    </>
  )
}

const ConnectedNavbar = (props) => (
  <AuthConsumer>
    { value => <MainNavbar {...props} {...value} /> }
  </AuthConsumer>
)

export default ConnectedNavbar;