import { Grid } from '@mui/material';
import TileContent from '../../components/atoms/TileContent';
import Content from '../../components/organisms/Content';


export default function Home() {
  return (
    <Content title='Home' >
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <TileContent color='secondary.light' minHeight={320}>            
          </TileContent>
        </Grid>
        <Grid item xs={3}>
          <TileContent >
            
          </TileContent>
        </Grid>
        <Grid item xs={3}>
          <TileContent >
            
          </TileContent>
        </Grid>
        <Grid item xs={3}>
          <TileContent >
            
          </TileContent>
        </Grid>
        <Grid item xs={3}>
          <TileContent >
            
          </TileContent>
        </Grid>
      </Grid>
    </Content >
  );
}