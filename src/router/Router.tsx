import { Route, Routes } from 'react-router-dom';
import NoMatch from '../components/molecules/NoMatch';
import Main from '../pages/main/Main';
import Login from '../pages/login/Login';
import Home from '../pages/home/Home';
import NewUser from '../pages/user/NewUser';
import External from '../components/templates/External';

const Router = (): JSX.Element => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<Login />} />
    <Route path="external" element={<External />}>
      <Route path="new-user" element={<NewUser />} />
    </Route>
    <Route path="main" element={<Main />}>
      <Route index element={<Home />} />
    </Route>
    <Route path="*" element={<NoMatch />} />
  </Routes>
);

export default Router;
