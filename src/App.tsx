import { useState } from 'react';
import { Box, Button } from '@mui/material';

import reactLogo from './assets/react.svg';

import './App.css';
import { FavoritePageIcon } from './icons/FavoritePageIcon';
import { AddFavoriteIcon } from './icons/AddFavoriteIcon';
import { UploadPageIcon } from './icons/UploadPageIcon';
import { AddFavoriteVoteIcon } from './icons/AddFavoriteVoteIcon';

function App() {
  const [toggleMouseOver, setToggleMouseOver] = useState<boolean>(false);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <Button variant="contained" color="secondary">
          contained secondary
        </Button>
        <Button
          variant="contained"
          color="primary"
          onMouseEnter={() => setToggleMouseOver(true)}
          onMouseLeave={() => setToggleMouseOver(false)}
        >
          <AddFavoriteIcon state={toggleMouseOver ? 'hover' : 'default'} />
          <span style={{ marginLeft: '10px' }}>contained primary</span>
        </Button>
        <Button variant="outlined">outlined primary</Button>
        <Button variant="outlined" color="secondary">
          outlined secondary
        </Button>
        <Box>
          <FavoritePageIcon state="default" />
          <FavoritePageIcon state="active" />

          <AddFavoriteIcon state="default" />
          <AddFavoriteIcon state="hover" />
          <AddFavoriteIcon state="active" />

          <UploadPageIcon state="default" />
          <UploadPageIcon state="active" />

          <AddFavoriteVoteIcon />
          <AddFavoriteVoteIcon state="hover" />
          <AddFavoriteVoteIcon state="active" />
        </Box>
      </div>
    </>
  );
}

export default App;
