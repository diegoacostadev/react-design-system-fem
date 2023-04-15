import styled from 'styled-components';
import { PrimaryButton, SecondaryButton, TertiaryButton } from './components/Button'
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, defaultTheme } from './utils';
import Modal from './components/Modal';

const H1 = styled.h1`
  font-weight: bold;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 50px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 16px;
  padding-right: 16px;
`;

function App() {
  const [useDarkTheme, setUseDarkTheme] = useState<Boolean>(false);

  const toggleTheme = () => {
    setUseDarkTheme(c => !c);
  }

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <div className="App" style={{
        backgroundColor: useDarkTheme ? darkTheme.bodyBg : defaultTheme.bodyBg,
        width: '100vw',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
        <H1>Design System React FEM {useDarkTheme ? 'dark' : 'light' }</H1>
        <Container>
          <PrimaryButton onClick={() => toggleTheme()} modifiers={['small']}>Toggle Theme</PrimaryButton>
          <SecondaryButton>Secondary Button</SecondaryButton>
          <TertiaryButton modifiers={['large']}>Tertiary Button</TertiaryButton>
        </Container>
        <Modal></Modal>
      </div>
    </ThemeProvider>
  )
}

export default App
