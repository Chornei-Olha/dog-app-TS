import { Outlet } from 'react-router-dom';

import './App.css';
import Header from './components/organism/Header';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
