import { Link } from 'react-router-dom';

const Nomatch = () => (
  <>
    <h1>404 -  Page Not Found</h1>
    <Link to='/'>
      Return Home
    </Link>
  </>
)

export default Nomatch;