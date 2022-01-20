import { ChakraProvider } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Account from '../Account';
import Auth from '../Auth';
import { supabase } from '../supabaseClient';


export default function SignIn() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return <ChakraProvider >{!session ? <Auth /> : <Account key={session.user.id} session={session} />}</ChakraProvider>;
}