import { NodeTypes } from '@mern-monorepo/ui-react-template';
import EndpointNode from './EndpointNode';
import ScreenNode from './ScreenNode';
import StartNode from './StartNode';

export const nodeTypes: NodeTypes = {
  endpointNode: EndpointNode,
  startNode: StartNode,
  screenNode: ScreenNode,
};
