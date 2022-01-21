import {
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useContext } from "react";
import { Modal, Form, Button, Container, Row, Col } from "react-bootstrap";
import { supabase } from "./supabaseClient";

const AuthContext = React.createContext()

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const toast = useToast();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogin = async (email) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({ email });
      if (error) throw error;
      toast({
        title: "Account Created",
        position: "top",
        description: "Check your email for account verification link",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Error",
        position: "top",
        description: error.error_description || error.message,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow} className="videoCalendarButton">
        Are You Ready?
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <p>
                  a world of retirement planning adventure awaits!
                </p>
              </Col>
              <Container>
                <Row>
                <Form.Label>Email address</Form.Label>
                  <Form.Control id="email" type='email' onChange={(e) => setEmail(e.target.value)} value={email}>
                  </Form.Control>
                  <Row spacing={10}>
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        handleLogin(email);
                      }}
                      isLoading={loading}
                      loadingText="Signing in ..."
                      variant="primary"
                    >
                      {loading || "Do Something Cool!"}
                    </Button>
                  </Row>
                </Row>
              </Container>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export function useAuth() {
  return useContext(AuthContext)
}
