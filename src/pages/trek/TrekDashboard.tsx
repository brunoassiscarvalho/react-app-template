import { Flow, FlowObject } from '@mern-monorepo/ui-react-template';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import 'reactflow/dist/style.css';
import CustomNodeList from './nodes/CustomNodesList';

export default function TrekDashboard() {
  const navigate = useNavigate();
  let { idDetail } = useParams<string>();
  const [dataFlow, setDataFlow] = useState<FlowObject>();
  const [intialFlow, setIntialFlow] = useState<FlowObject | null>(null);

  const onNodeDoubleClick = useCallback((event: React.MouseEvent, node: any) => {
    event.preventDefault();
    navigate(`new/${node.type}`);
  }, []);

  const changeFlow = (data: FlowObject) => {
    setDataFlow(data);
  };

  useEffect(() => {
    let timeout = setTimeout(() => {
      if (dataFlow && idDetail) updateTrek();
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [dataFlow]);

  useEffect(() => {
    if (idDetail) {
      getTrek();
    }
  }, [idDetail]);

  const getTrek = () => {
    fetch(
      `http://localhost:3010/trek/${idDetail}?` +
        new URLSearchParams({
          foo: 'value',
          bar: '2',
        }),
      {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json',
          Accept: 'application/json',
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setIntialFlow(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const updateTrek = async () => {
    await fetch('http://localhost:3010/trek', {
      method: 'PUT',
      body: JSON.stringify({ ...dataFlow, _id: idDetail }),
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
    });
  };

  return (
    <>
      <>Detail {idDetail}</>
      <div style={{ width: '90vw', height: '90vh' }}>
        {!!intialFlow && (
          <Flow
            onNodeDoubleClick={onNodeDoubleClick}
            nodeTypes={CustomNodeList}
            flowData={intialFlow}
            onChange={changeFlow}
          />
        )}
      </div>
    </>
  );
}
