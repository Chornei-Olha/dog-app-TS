import { useState } from 'react';
import { Button } from '@mui/material';
import CustomBox from './components/atoms/CustomBox/СustomBox';
import reactLogo from './assets/react.svg';

import './App.css';

function App() {
  const [count, setCount] = useState(0);
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
        <Button variant="contained" color="primary">
          <span style={{ marginRight: '15px', color: 'yellow' }}>2</span>
          contained primary
        </Button>
        <Button variant="outlined">outlined primary</Button>
        <Button variant="outlined" color="secondary">
          outlined secondary
        </Button>
      </div>

      <CustomBox showHovered={true} borderRadius={20}>
        <p>Hello, guys!</p>
      </CustomBox>
    </>
  );
}

export default App;
