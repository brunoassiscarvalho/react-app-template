import { Dashboard } from '@mern-monorepo/ui-react-template';
import { AddToQueue, Boy } from '@mui/icons-material';
import { Outlet, useMatches, useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const matches: any = useMatches();
  const startMenu = matches[matches.length - 1].handle.tab;

  return (
    <Dashboard
      onChangeTab={(value) => navigate(value)}
      menu={[
        { value: 'profile', icon: <Boy /> },
        { value: 'trek', icon: <AddToQueue /> },
      ]}
      startMenu={startMenu}
    >
      <Outlet />
    </Dashboard>
  );
}
