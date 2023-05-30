import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout';
import { AuthPravayder } from './hoc/AuthPravayder';
import { PrivateAth } from './hoc/PrivateAth';
import AboutPage from './pages/AboutPage';
import Blogpage from './pages/BlogPage';
import Createpost from './pages/Createpost';
import Editpost from './pages/Editpost';
import HomePage from './pages/HomePage';
import { Login } from './pages/Login';
import NotfoundpPage from './pages/NotfoundpPage';
import { SinglePage } from './pages/SinglePage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element= {<Layout/>}>
          <Route index      element= {<HomePage />}  />
          <Route path='*'    element={<NotfoundpPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
