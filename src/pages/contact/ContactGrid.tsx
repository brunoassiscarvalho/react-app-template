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
import ContactService from './ContactService';
import useRequest from '../../hooks/useRequest';

interface PropsContactGrid {
  service?: ContactService;
}

export default function ContactGrid({ service = new ContactService() }: PropsContactGrid) {
  const navigate = useNavigate();

  const { sendRequest, loading } = useRequest();

  const [contacts, setContacts] = useState();

  const getContact = () => {
    sendRequest({
      promise: service.getContacts(),
      success: { callback: (res) => setContacts(treckParseToCard(res)) },
    });
  };

  const treckParseToCard = (data: any) => {
    return data.map((item: any) => ({
      ...item,
      onClick: () => navigate(`${item._id}`),
    }));
  };

  useEffect(() => {
    getContact();
  }, []);

  useEffect(() => {
 console.log(contacts)
  }, [contacts]);

  return (
    <Box width="100%" paddingTop={10} paddingLeft={10}>
      <Stack spacing={3}>
        <Stack direction="row" spacing={3} alignItems="center">
          <Box>
            <IconButton type="button" aria-label="search">
              <IconSearch />
            </IconButton>
            <InputBase placeholder="Procurar Contact" inputProps={{ 'aria-label': 'search google maps' }} />
          </Box>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <Button variant="text" onClick={() => navigate('new')} startIcon={<IconAdd />}>
            Contact
          </Button>
        </Stack>
        {!!contacts && <CardGrid dataSource={contacts} />}
      </Stack>
    </Box>
  );
}
