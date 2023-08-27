import { Box, Paper } from '@mui/material';
import { ReactNode, useState } from 'react';
import { WidthProvider, Responsive } from 'react-grid-layout';
import "./styles.css"

const ResponsiveReactGridLayout = WidthProvider(Responsive);
const originalLayouts = {};

interface Props {
  children?: ReactNode;
}

interface State {
  layouts: any;
}

/**
 * This layout demonstrates how to sync multiple responsive layouts to localstorage.
 */
export default function ScreenDashboard() {
  const [layouts, setLayout] = useState<any>({
    layouts: JSON.parse(JSON.stringify(originalLayouts)),
  });

  const onLayoutChange = (layout: any, layouts: any) => {
    console.log({ layout });
    setLayout({ layouts });
  };

  return (
    <Box height='80vh'>
      <ResponsiveReactGridLayout
        cols={{ lg: 12, md: 10, sm: 6, xs: 1, xxs: 1 }}
        autoSize={true}
        rowHeight={100}
        isResizable
        isDraggable
        isDroppable
        layouts={layouts}
        onLayoutChange={(layout, layouts) => onLayoutChange(layout, layouts)}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}        
      >
        <div key="1" data-grid={{ w: 2, h: 3, x: 0, y: 0 }}>
        <Paper sx={{ width: '100%', height: '100%' }}>1</Paper>
        </div>
        <div key="2" data-grid={{ w: 2, h: 3, x: 2, y: 0}}>
          <Paper sx={{ width: '100%', height: '100%' }}>2</Paper>
        </div>
        <div key="3" data-grid={{ w: 2, h: 3, x: 4, y: 0,  }}>
          <Paper sx={{ width: '100%', height: '100%' }}>3</Paper>
        </div>
        <div key="4" data-grid={{ w: 2, h: 3, x: 6, y: 0}}>
          <Paper sx={{ width: '100%', height: '100%' }}>4</Paper>
        </div>
        <div key="5" data-grid={{ w: 2, h: 3, x: 8, y: 0}}>
          <Paper sx={{ width: '100%', height: '100%' }}>5</Paper>
        </div>
      </ResponsiveReactGridLayout>
    </Box>
  );
}
