import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useAuth } from './Auth';
import { Main } from './component/MainComponent';
import { useEffect, useState } from 'react';
// import RecoverPassword from "./component/RecoverComponent";
import { supabase } from './supabaseClient';

function App({ session }) {
  // const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [paidVideo, setPaidVideo] = useState(null);
  const [paidDeposit, setPaidDeposit] = useState(null);

  useEffect(() => {
    getProfile();
  }, [session]);

  async function getProfile() {
    try {
      // setLoading(true);
      const user = supabase.auth.user();

      let { data, error, status } = await supabase
        .from("profiles")
        .select(`username, paidVideo, paidDeposit`)
        .eq('id', user?.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setPaidVideo(data.paidVideo);
        setPaidDeposit(data.paidDeposit);
      }
    } catch (error) {
      // alert(error.message);
    } finally {
      // setLoading(false);
    }
  }
  return (
    <div className="App" >
      <Main vids={paidVideo} deposit={paidDeposit} userName={username}/>
    </div>
  );
}

export default App;
