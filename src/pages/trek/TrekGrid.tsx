import { CardGrid } from '@mern-monorepo/ui-react-template';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Divider, IconButton, InputBase, Stack, Typography } from '@mui/material';
import { Search as SearchIcon, Add, ArrowBack, AddToQueue } from '@mui/icons-material';
import { useEffect, useState } from 'react';

export default function TrekGrid() {
  const navigate = useNavigate();

  const [treks, setTreks] = useState();

  useEffect(() => {
    fetch('http://localhost:3010/trek', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setTreks(
          data.map(({ _id }:any) => ({
            title: _id,
            description: _id,
            onClick: () => navigate(`detail/${_id}`),
          }))
        );
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <Box width="100%">
      <Stack spacing={3}>
        <ArrowBack />
        <Stack direction="row" spacing={3} alignItems="center">
          <AddToQueue fontSize="large" />
          <Typography variant="h4">Jornada</Typography>
        </Stack>
        <Stack direction="row" spacing={3} alignItems="center">
          <Box>
            <IconButton type="button" aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase placeholder="Procurar Trek" inputProps={{ 'aria-label': 'search google maps' }} />
          </Box>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <Button variant="text" onClick={() => navigate('new')} startIcon={<Add />}>
            Jornada
          </Button>
        </Stack>
        {!!treks && <CardGrid dataSource={treks} />}
      </Stack>
    </Box>
  );
}
