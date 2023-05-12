import { ContentInner } from '@mern-monorepo/ui-react-template';
import { Box, Button, Divider, InputBase, Stack } from '@mui/material';
import { Outlet, useMatches, useNavigate } from 'react-router-dom';
import { Add } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function TrekHome() {
  const navigate = useNavigate();
  const matches:any = useMatches();
  return (
    <ContentInner
      goBack={() => navigate(-1)}
      title={'Trek'}
      
    >
      <Outlet />
    </ContentInner>
  );
}
