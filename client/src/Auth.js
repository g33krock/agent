// import {
//     Box,
//     Button,
//     Flex,
//     FormControl,
//     FormLabel,
//     Heading,
//     Input,
//     Stack,
//     Text,
//     useColorModeValue,
//     useToast
//   } from '@chakra-ui/react';
import { useState } from "react";
import { Container, FormControl, FormLabel, Button } from "react-bootstrap";
import { Input } from "reactstrap";
import { supabase } from "./supabaseClient";

export default function Auth() {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const toast = useToast();

    const handleLogin = async (email, password) => {
        try {
            setLoading(true);
            const { error } = await supabase.auth.signIn({ email, password });
            if (error) throw error;
            // toast({
            //     title: 'Account Created',
            //     position: 'top',
            //     description: 'Check your email for account verification link',
            //     status: 'success',
            //     duration: 5000,
            //     isClosable: true
            // });
        } catch (error) {
            // toast({
            //     title: 'Error',
            //     position: 'top',
            //     description: error.error_description || error.message,
            //     status: 'success',
            //     duration: 5000,
            //     isClosable: true
            // });
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
        {/* <Flex minH={'100vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
          <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
              <Heading fontSize={'4xl'}>Sign in to supabase</Heading>
              <Text fontSize={'lg'} color={'gray.600'}>
                via magic link with your email below ✌️
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
        </Flex> */}
        <Container style={{minHeight:'100vh', align:'center', justify:'center'}}>
          <div>
            <div>
              <div>Sign in to supabase</div>
              <p>
                via magic link with your email below ✌️
              </p>
            </div>
            <div>
              <div>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input value={email} onChange={e => setEmail(e.target.value)} type="email" />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input value={password} onChange={e => setPassword(e.target.value)} type="password" />
                </FormControl>
                <div>
                  <Button
                    onClick={e => {
                      e.preventDefault();
                      handleLogin(email, password);
                    }}
                    // isLoading={loading}
                    // loadingText="Signing in ..."
                    // colorScheme="teal"
                    // variant="outline"
                    // spinnerPlacement="start"
                    // bg={'blue.400'}
                    // color={'white'}
                    // _hover={{
                    //   bg: 'blue.500'
                    // }}
                  >
                    {loading || 'Send magic link'}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    )
}