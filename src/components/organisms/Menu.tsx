import { Box, Grid, Typography } from '@mui/material';
import { ReactNode } from 'react';

interface IMenuItem {
  key: string;
  title: string;
  icon?: ReactNode;
}

interface IMenu {
  items: IMenuItem[]
}

export default function Menu({ items }: IMenu) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', backgroundColor: 'primary.light', width: '100%' }}>

      {items.map(({ key, title, icon }) => (

        <Box key={key} display='flex' justifyContent='center' alignItems='center' padding={2} color='white'>
          <Typography key={key} variant='button'>
            {title}
          </Typography>
        </Box>

      ))}

    </Box>
  );
}