import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from './Auth';
import { Main } from './component/MainComponent';
import { useState } from 'react';

function App() {
  const user = useAuth();
  const [paidVideo] = useState(true);
  const [paidDeposit] = useState(true)

  console.log(user?.email)
  return (
    <div className="App" >
      <Main vids={paidVideo} deposit={paidDeposit} userEmail={user?.email}/>
    </div>
  );
}

export default App;
