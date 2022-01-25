import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from './Auth';
import { Main } from './component/MainComponent';
import { useState } from 'react';
import RecoverPassword from "./cmoponent/RecoverComponent";

function App() {
  const user = useAuth();
  const [paidVideo] = useState(true);
  const [paidDeposit] = useState(true)
  const params = new URLSearchParams(window.location.hash);

  const accessToken = params.get("access_token");
  console.log(accessToken);
  const [recoveryToken, setRecoveryToken] = useState(accessToken);

  console.log(user)
  return recoveryToken ? (
    <RecoverPassword
      token={recoveryToken}
      setRecoveryToken={setRecoveryToken}
      user={user}
    />
  ) : (
    <div className="App" >
      <Main vids={paidVideo} deposit={paidDeposit} userEmail={user?.email}/>
    </div>
  );
}

export default App;
