// import { NodeTypes } from '@mern-monorepo/ui-react-template';
import { NodeTypes } from '@mern-monorepo/ui-react-template';
import EndpointNode from './EndpointNode';
import ScreenNode from './ScreenNode';
import StartNode from './StartNode';

const CustomNodeList: NodeTypes = {
  endpointNode: EndpointNode,
  startNode: StartNode,
  screenNode: ScreenNode,
};

export default CustomNodeList;
