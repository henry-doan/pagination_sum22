import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import Nomatch from './components/shared/Nomatch';
import MainNavbar from './components/shared/MainNavbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Languages from './components/languages/Languages';

const App = () => (
  <>
    <MainNavbar />
    <FetchUser>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<ProtectedRoute />}>
          <Route path='/languages' element={<Languages />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/*' element={<Nomatch />} />
      </Routes>
    </FetchUser>
  </>
)

export default App;
