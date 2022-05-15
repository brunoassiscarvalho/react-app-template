import { createTheme, Theme } from '@mui/material';
import { grey, green, lime, indigo } from '@mui/material/colors';
import { ptBR } from '@mui/material/locale';

const customTheme: Theme = createTheme(
  {
    components: {
      MuiTab: {
        defaultProps: {
          style: {
            minWidth: 45,
          },
        },
      },
      MuiButton: {
        defaultProps: {
          variant: 'contained',
          style: {
            fontSize: '1rem',
            lineHeight: '1rem',
            textTransform: 'uppercase',
            padding: '.625rem 1rem',
          },
        },
      },
      MuiInput: {
        defaultProps: {
          style: {
            // fontFamily: 'Geomanist Book',
            fontSize: '.9375rem',
            fontWeight: 500,
            lineHeight: '1.5rem',
            borderColor: 'palette.backgroud',
            padding: '.4375rem 1rem',
          },
        },
      },
      MuiInputLabel: {
        defaultProps: {
          style: {
            // fontFamily: 'Geomanist Regular',
            fontSize: '.9375rem',
            fontWeight: 400,
            lineHeight: '1.5rem',
            marginBottom: '.5rem',
            color: 'black',
          },
        },
      },
      MuiCardHeader: {
        styleOverrides: {
          title: {
            // fontFamily: 'Geomanist Book',
            fontSize: '.9375rem',
            fontWeight: 500,
            lineHeight: '1.5rem',
          },
        },
      },
    },
    palette: {
      primary: {
        main: indigo[900],
      },
      secondary: {
        main: green[800],
      },
      background: {
        default: grey[300],
      },
    },
    typography: {
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
    shape: {
      borderRadius: 2,
    },
  },
  ptBR,
);

export default customTheme;
