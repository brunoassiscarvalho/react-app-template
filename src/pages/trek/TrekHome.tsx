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
      header={
        <Stack direction="row" spacing={3} alignItems="center">
          <Box>
            <IconButton type="button" aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase placeholder="Procurar Trek" inputProps={{ 'aria-label': 'search google maps' }} />
          </Box>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <>
            {matches.map(({ handle }:any) => (
              <>{handle?.title} / </>
            ))}
          </>
          <Button variant="text" onClick={() => navigate('new')} startIcon={<Add />}>
            Novo
          </Button>
        </Stack>
      }
    >
      <Outlet />
    </ContentInner>
  );
}
