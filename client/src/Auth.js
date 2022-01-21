// import { supabase } from "./supabaseClient";
// import React, { useContext, useState, useEffect } from 'react'


// const AuthContext = React.createContext()

// export default function Auth({ children }) {
//     const [user, setUser] = useState()
//     const [token, setToken] = useState()
//     const [loading, setLoading] = useState(true)
  
//     useEffect(() => {
//       // Check active sessions and sets the user
//       const session = supabase.auth.session()
  
//       setUser(session?.user ?? null)
//       setLoading(false)
  
//       // Listen for changes on auth state (logged in, signed out, etc.)
//       const { data: listener } = supabase.auth.onAuthStateChange(
//         async (event, session) => {
//           setToken(session?.access_token ?? null);
//           setUser(session?.user ?? null)
//           setLoading(false)
//         }
//       )
  
//       return () => {
//         listener?.unsubscribe()
//       }
//     }, [])
  
//     // Will be passed down to Signup, Login and Dashboard components
//     const value = {
//       signUp: (data) => supabase.auth.signUp(data),
//       signIn: (data) => supabase.auth.signIn(data),
//       signOut: () => supabase.auth.signOut(),
//       user,
//     }
  
//     return (
//       <AuthContext.Provider value={value}>
//         {!loading && children}
//       </AuthContext.Provider>
//     )
//   }

//   export function useAuth() {
//     return useContext(AuthContext)
//   }

import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Text,
    useColorModeValue,
    useToast
  } from '@chakra-ui/react';
import { useState } from "react";
import { supabase } from "./supabaseClient";

export default function Auth() {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const toast = useToast();

    const handleLogin = async (email, password) => {
        try {
            setLoading(true);
            const { error } = await supabase.auth.signIn({ email, password });
            if (error) throw error;
            toast({
                title: 'Account Created',
                position: 'top',
                description: 'Check your email for account verification link',
                status: 'success',
                duration: 5000,
                isClosable: true
            });
        } catch (error) {
            toast({
                title: 'Error',
                position: 'top',
                description: error.error_description || error.message,
                status: 'success',
                duration: 5000,
                isClosable: true
            });
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
        <Flex minH={'100vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
          <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
              <Heading fontSize={'4xl'}>Sign In</Heading>
              <Text fontSize={'lg'} color={'gray.600'}>
                a world of retirement planning adventure awaits!
              </Text>
            </Stack>
            <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input value={email} onChange={e => setEmail(e.target.value)} type="email" />
                </FormControl>
                <Stack spacing={10}>
                  <Button
                    onClick={e => {
                      e.preventDefault();
                      handleLogin(email);
                    }}
                    isLoading={loading}
                    loadingText="Signing in ..."
                    colorScheme="teal"
                    variant="outline"
                    spinnerPlacement="start"
                    bg={'blue.400'}
                    color={'white'}
                    _hover={{
                      bg: 'blue.500'
                    }}
                  >
                    {loading || 'Send magic link'}
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </div>
    )
}