import { Flow } from '@mern-monorepo/ui-react-template';
import { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import 'reactflow/dist/style.css';
import CustomNodeList from './nodes/CustomNodesList';

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
        <Flow onNodeDoubleClick={onNodeDoubleClick} nodeTypes={CustomNodeList} />
      </div>
    </>
  );
}
