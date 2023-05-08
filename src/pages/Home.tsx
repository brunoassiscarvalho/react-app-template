import { Dashboard } from '@mern-monorepo/ui-react-template';
import { Outlet, useMatches, useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const matches: any = useMatches();

  // console.log('matches', matches[matches.length - 1].handle.tab);
  return (
    <Dashboard
      onChangeTab={(value) => navigate(value)}
      menu={[
        { label: 'profile', value: 'profile' },
        { label: 'trek', value: 'trek' },
      ]}
      startMenu={matches[matches.length - 1].handle.tab}
    >
      <Outlet />
    </Dashboard>
  );
}
