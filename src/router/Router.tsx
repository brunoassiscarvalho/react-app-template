import { Route, Routes } from 'react-router-dom';
import NoMatch from '../components/molecules/NoMatch';
import Main from '../pages/main/Main';
import SignIn from '../login/SignIn';
import Home from '../pages/home/home';

const Router = (): JSX.Element => (
  <Routes>
    <Route path="/" element={<SignIn />} />
    <Route path="main" element={<Main />}>
      <Route index element={<Home />} />
    </Route>
    <Route path="*" element={<NoMatch />} />
  </Routes>
);

export default Router;
