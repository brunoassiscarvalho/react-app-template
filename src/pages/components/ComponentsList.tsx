import { SideToolBar, Paper, Button, Stack } from '@mern-monorepo/ui-react-template';
import { useEffect, useState } from 'react';
import useRequest from '../../hooks/useRequest';
import ComponentService from './ComponentsService';
import { IComponents } from '@codeless-app/interfaces';

interface ComponentsListProps {
  service?: ComponentService;
}

export default function ComponentsList({ service = new ComponentService() }: ComponentsListProps) {
  const { sendRequest, loading } = useRequest();

  const [components, setComponents] = useState<IComponents>();

  useEffect(() => {
    sendRequest({
      promise: service.getComponent(),
      success: {
        callback: (res) => {
          setComponents(res), setComponents(res), console.log({ res });
        },
      },
    });
  }, []);

  return (
    components && (
      <SideToolBar side="left">
        {components?.components?.map(({ name }) => (
          <Paper
            key={name}
            draggable={true}
            unselectable="on"
            onDragStart={(e) => e.dataTransfer.setData('text/plain', name)}
          >
            <Button fullWidth> {name}</Button>
          </Paper>
        ))}
      </SideToolBar>
    )
  );
}
