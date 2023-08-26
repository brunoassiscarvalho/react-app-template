
import { Outlet } from 'react-router-dom';
import Content from '../../Content';


export default function TrekHome() {
  return (
    <Content
      title='Trek'
    >
    <Outlet />
    </Content>
  );
}
