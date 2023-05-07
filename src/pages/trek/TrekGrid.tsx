import { CardGrid } from '@mern-monorepo/ui-react-template';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';

export default function TrekGrid() {
  const navigate = useNavigate();
  const tetes = [...Array(60).keys()];
  const testeGrid = tetes.map((item) => ({
    title: `Jornada - ${item}`,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    onClick: () => navigate(`detail/Jornada${item}`),
  }));

  return (
    <Box width="100%">
      <CardGrid dataSource={testeGrid} />
    </Box>
  );
}
