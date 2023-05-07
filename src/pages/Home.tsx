import { Dashboard } from '@mern-monorepo/ui-react-template';
import { Outlet, useNavigate } from 'react-router-dom';

export default function Home() {

  const navigate = useNavigate();

  

  return (
    <Dashboard
      onChangeTab={(value) => navigate(value)}
      menu={[
        { label: 'profile', value: 'profile' },
        { label: 'trek', value: 'trek' },
      ]}
    >
      <Outlet />
    </Dashboard>
  );
}
