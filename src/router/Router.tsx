import { Route, Routes } from 'react-router-dom';
import NoMatch from '../components/molecules/NoMatch';
import Main from '../pages/main/Main';
import Login from '../login/Login';
import Home from '../pages/home/Home';


const Router = (): JSX.Element => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="main" element={<Main />}>
      <Route index element={<Home />} />
    </Route>
    <Route path="*" element={<NoMatch />} />
  </Routes>
);

export default Router;
