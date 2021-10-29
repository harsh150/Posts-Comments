import { Button, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <Navbar bg="dark" variant="dark">
      <h3 href="#home" style={headingTitle}>GaleHealth</h3>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <Link to={'/'} style={headingButton}>
            <Button variant="success">Retutn to Posts</Button>{' '}
          </Link>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>

  )
}

const headingTitle = {
  marginLeft: '2rem', 
  color: '#ffffff',
}

const headingButton = {
  marginRight: '2rem', 
  textDecoration: 'none',
}

export default Header
