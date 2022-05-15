import { Outlet, Route, Routes } from 'react-router-dom';
import NoMatch from '../components/molecules/noMatch';
import Main from '../pages/main/Main';
import SignIn from '../pages/main/SignIn';

const Router = (): JSX.Element => (
  <Routes>
    <Route path="/" element={<SignIn />} />
    <Route path="main" element={<Main />}></Route>
    <Route path="*" element={<NoMatch />} />
  </Routes>
);

export default Router;
