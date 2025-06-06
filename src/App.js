import logo from './logo.svg';
import './App.css';
import { Navbar } from './component/Navbar/Navbar';
import { ThemeProvider } from '@emotion/react';
import { darkTheme } from './Themes/DarkTheme';
import { CssBaseline } from '@mui/material';
import Home from './component/Home/Home';


function App() {
  return (
    
     <ThemeProvider theme={darkTheme}>
     <CssBaseline/>
     
     <Navbar/>
     <Home/>
     
     </ThemeProvider>
  
  );
}

export default App;
