import { createTheme, Theme } from '@mui/material';
import { grey, green, lime, indigo } from '@mui/material/colors';
import { ptBR } from '@mui/material/locale';

const customTheme: Theme = createTheme(
  {
    components: {
      MuiButton: {
        defaultProps: {
          variant: 'contained',
        },
      },
    },
    palette: {
      mode: 'dark',
      primary: {
        main: '#466b49',
      },
      secondary: {
        main: '#ACC0A8',
      },
    },
    typography: {
      h5: {
        textAlign: 'center',
      },
      // fontFamily: [
      //   'Geomanist Regular',
      //   'Geomanist Black',
      //   'Geomanist Book',
      //   'Geomanist Ultra',
      //   'Geomanist Thin',
      //   'Geomanist Light',
      //   'Geomanist Extra Light',
      //   'Geomanist Medium',
      //   'Geomanist Bold',
      // ].join(','),
    },
    // shape: {
    //   borderRadius: 2,
    // },
  },
  ptBR
);

export default customTheme;
