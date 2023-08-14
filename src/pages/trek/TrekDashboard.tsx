import { Flow, FlowObject } from '@mern-monorepo/ui-react-template';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import 'reactflow/dist/style.css';
import CustomNodeList from './nodes/CustomNodesList';

const intialFlow = [
  {
    id: '1',
    position: { x: 0, y: 0 },
    type: 'start',
  },

  {
    id: '2',
    position: { x: 200, y: 0 },
    type: 'screen',
  },
];

export default function TrekDashboard() {
  const navigate = useNavigate();
  let { idDetail } = useParams<string>();
  const [dataFlow, setDataFlow] = useState<FlowObject>();

  const onNodeDoubleClick = useCallback((event: React.MouseEvent, node: any) => {
    event.preventDefault();
    navigate(`new/${node.type}`);
  }, []);

  const changeFlow = (data: FlowObject) => {
    setDataFlow(data);
    console.log('changedddd', data);
  };

  useEffect(() => {
    let timeout = setTimeout(() => {
      console.log('time', dataFlow);
    }, 3000);

    return () => {
      console.log('end time');
      clearTimeout(timeout);
    };
  }, [dataFlow]);

  return (
    <>
      <>Detail {idDetail}</>
      <div style={{ width: '90vw', height: '90vh' }}>
        <Flow
          onNodeDoubleClick={onNodeDoubleClick}
          nodeTypes={CustomNodeList}
          flowData={intialFlow}
          onChange={changeFlow}
        />
      </div>
    </>
  );
}
