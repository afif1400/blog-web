import MainComponent from './MainComponent';
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@material-ui/core/styles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
};

theme.typography.h6 = {
  fontSize: '1rem',
  '@media(min-width:600px)': {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.2rem',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainComponent />;
    </ThemeProvider>
  );
}

export default App;
