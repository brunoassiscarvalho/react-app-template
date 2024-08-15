import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CardGrid,
  Box,
  Button,
  Divider,
  IconButton,
  InputBase,
  Stack,
  IconSearch,
  IconAdd,
} from '@mern-monorepo/ui-react-template';
import ExempleService from './ExempleService';
import useRequest from '../../hooks/useRequest';

interface PropsExempleGrid {
  service?: ExempleService;
}

export default function ExempleGrid({ service = new ExempleService() }: PropsExempleGrid) {
  const navigate = useNavigate();

  const { sendRequest, loading } = useRequest();

  const [exemples, setExemples] = useState();

  const getExemple = () => {
    sendRequest({
      promise: service.getExemple(),
      success: { callback: (res) => setExemples(treckParseToCard(res)) },
    });
  };

  const treckParseToCard = (data: any) => {
    return data.map((item: any) => ({
      ...item,
      onClick: () => navigate(`${item._id}`),
    }));
  };

  useEffect(() => {
    getExemple();
  }, []);

  return (
    <Box width="100%" paddingTop={10} paddingLeft={10}>
      <Stack spacing={3}>
        <Stack direction="row" spacing={3} alignItems="center">
          <Box>
            <IconButton type="button" aria-label="search">
              <IconSearch />
            </IconButton>
            <InputBase placeholder="Procurar Exemple" inputProps={{ 'aria-label': 'search google maps' }} />
          </Box>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <Button variant="text" onClick={() => navigate('new')} startIcon={<IconAdd />}>
            Jornada
          </Button>
        </Stack>
        {!!exemples && <CardGrid dataSource={exemples} />}
      </Stack>
    </Box>
  );
}
