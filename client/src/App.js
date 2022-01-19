import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Main } from './component/MainComponent';
import { useState } from 'react';

function App() {
  const [paidVideo] = useState(true);
  const [paidDeposit] = useState(true)
  return (
    <div className="App" >
      <Main vids={paidVideo} deposit={paidDeposit}/>
    </div>
  );
}

export default App;
