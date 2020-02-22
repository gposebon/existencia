import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

//components
import NavBar from './components/NavBar' 

//Pages
import home from './pages/home'
import entrada from './pages/entrada'
import limpieza from './pages/limpieza'
import silo from './pages/silo'
import proveedor from './pages/proveedor'
import semilla from './pages/semilla'

import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#64d8cd',
      main: '#26a69a',
      dark: '#00766c',
      contrastText: '#fff',
    },
    secondary: {
      light: '#e1ffb1',
      main: '#aed581',
      dark: '#7da453',
      contrastText: '#fff',
    },
  },
});


function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
      <Router>
        <NavBar/>
        <div className='container'>
        <Switch>
          <Route exact path='/' component={home}/>
          <Route exact path='/entrada' component={entrada}/>
          <Route exact path='/limpieza' component={limpieza}/>
          <Route exact path='/silo' component={silo}/>
          <Route exact path='/proveedor' component={proveedor}/>
          <Route exact path='/semilla' component={semilla}/>
        </Switch>
        </div>
      </Router>
    </div>
    </MuiThemeProvider>
  );
}

export default App;
