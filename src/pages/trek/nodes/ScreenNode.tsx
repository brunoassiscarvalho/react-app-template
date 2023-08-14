import { CustomNode } from '@mern-monorepo/ui-react-template';
import { Typography, Paper } from '@mui/material';

export default function ScreenNode() {
  return (
    <CustomNode>
      <Typography variant="h6"> Screen</Typography>
      <Paper variant="outlined" color="secondary" sx={{ width: '100%', minHeight: '5vh' }}></Paper>
    </CustomNode>
  );
}
