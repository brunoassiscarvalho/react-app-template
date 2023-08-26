import { Button, Form, InputText } from '@mern-monorepo/ui-react-template';
import { ArrowBack, AddToQueue } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';

import useRequest from '../../hooks/useRequest';

const initialTrek = {
  nodes: [
    {
      width: 100,
      height: 48,
      id: '1',
      position: {
        x: 0,
        y: 0,
      },
      data: {},
      type: 'start',
      positionAbsolute: {
        x: 0,
        y: 0,
      },
    },
    {
      width: 100,
      height: 95,
      id: '2',
      position: {
        x: 200,
        y: 0,
      },
      data: {},
      type: 'screen',
      positionAbsolute: {
        x: 200,
        y: 0,
      },
    },
  ],
  edges: [
    {
      source: '1',
      sourceHandle: null,
      target: '2',
      targetHandle: null,
      id: 'reactflow__edge-1-2',
    },
  ],
  viewport: {
    x: 359,
    y: 330,
    zoom: 2,
  },
};

export default function TrekNew() {
  const { sendRequest, data, loading, error } = useRequest({ url: 'http://localhost:3010/trek', method: 'POST' });

  const onSubmit: any = (data: any) => {
    sendRequest({ ...data, ...initialTrek });
  };

  


  return (
    
        <Box maxWidth={700}>
          <Form onSubmit={onSubmit}>
            <InputText name="title" label="Título" />
            <InputText name="description" label="Descrição" multiline rows={4} placeholder="Placeholder" />
            <Button type="submit" label="teste" />
          </Form>
        </Box>
  );
}
