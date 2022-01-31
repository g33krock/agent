import React, { Component } from "react";
import { Button, Modal, ModalBody, Col, Row } from "reactstrap";
import { Image } from "react-bootstrap";
// import { agentService } from "../services/AgentService";
import SignIn from "./SignInComponent";

export class MyAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
  }

  toggle() {
    return !this.state.modal;
  }

  render() {
    return (
      <div style={{display: "none"}}>
        <Button
          color="link"
          style={{
            color: "white",
            padding: "0px"
          }}
          onClick={() => this.setState({ modal: true })}
        >
          <Row>
            <Col>
              <Image
                src="https://jwvonytjrpiueyuwsjpa.supabase.in/storage/v1/object/public/icons/MPIBadgeTransparentWHI.png"
                fluid
                style={{
                  backgroundColor: `${this.props.agent.primaryColor}`,
                  borderRadius: "50%",
                }}
                id="icons"
              />
            </Col>
            <Col style={{marginTop: "auto", marginBottom: "auto"}}>Account</Col>
          </Row>
        </Button>

        <Modal isOpen={this.state.modal} toggle={() => this.toggle()}>
          <ModalBody>
            <SignIn />
          </ModalBody>
          <Button
            style={{ backgroundColor: "secondary" }}
            onClick={() => this.setState({ modal: false })}
          >
            Close
          </Button>
        </Modal>
      </div>
    );
  }
}
