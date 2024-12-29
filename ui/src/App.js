import './App.css';
import * as React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Outbound } from '@mui/icons-material';

function App() {
  const navigate = useNavigate();
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Button
              color="inherit"
              onClick={() => {
                navigate('games');
              }}
            >
              Games
            </Button>
            <Button color="inherit" onClick={() => navigate('newGame')}>
              New
            </Button>
            <Box component="div" sx={{ flexGrow: 1 }}></Box>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <h1>App Route</h1>
      <Outlet />
    </div>
  );
}

export default App;
