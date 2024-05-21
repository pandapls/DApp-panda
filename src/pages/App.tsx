import MetaMaskCard from '@components/connectorCards/MetaMaskCard';
import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { createContext, useMemo, useState } from 'react';
const ColorModeContext = createContext({
  toggleColorMode: () => {
    console.log('ss');
  },
});

const App = () => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );
  return (
    <>
      <StyledEngineProvider injectFirst>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <h1>一灯Dapp框架从零开发</h1>
            <MetaMaskCard />
          </ThemeProvider>
        </ColorModeContext.Provider>
      </StyledEngineProvider>
    </>
  );
};
//监控组件是否重复渲染
App.whyDidYouRender = true;
export default App;
