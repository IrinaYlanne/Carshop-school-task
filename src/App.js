import React from 'react';
import './App.css';
import Carlist from './components/Carlist';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';

function App() {
  return (
    <div className="App">
     <AppBar position="static" >
       <Toolbar>
          <Typography variant= "h6">
              Carlist
          </Typography>
       </Toolbar>
      </AppBar>

       <Carlist />
    </div>
  );
}

export default App;
