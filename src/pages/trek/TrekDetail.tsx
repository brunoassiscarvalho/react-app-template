import { Flow } from '@mern-monorepo/ui-react-template';
import { useCallback } from 'react';
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

export default function TrekDetail() {
  let { idDetail } = useParams<string>();
  const navigate = useNavigate();

  const onNodeDoubleClick = useCallback((event: React.MouseEvent, node: any) => {
    event.preventDefault();
    navigate(`new/${node.type}`);
  }, []);

  return (
    <>
      <>Detail {idDetail}</>
      <div style={{ width: '90vw', height: '90vh' }}>
        <Flow onNodeDoubleClick={onNodeDoubleClick} nodeTypes={CustomNodeList} flowData={intialFlow} />
      </div>
    </>
  );
}
