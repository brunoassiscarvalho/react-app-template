import { Outlet} from 'react-router-dom';
import { DashboardNavBar } from '@mern-monorepo/ui-react-template';

export default function Home() {
  return (
    <DashboardNavBar>
      <Outlet />
    </DashboardNavBar>
  );
}
