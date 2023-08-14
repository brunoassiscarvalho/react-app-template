// import { NodeTypes } from '@mern-monorepo/ui-react-template';
import { NodeTypes } from '@mern-monorepo/ui-react-template';
import JobNode from './JobNode';
import ScreenNode from './ScreenNode';
import StartNode from './StartNode';

const CustomNodeList: NodeTypes = {
  job: JobNode,
  start: StartNode,
  screen: ScreenNode,
};

export default CustomNodeList;
