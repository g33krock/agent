import React, { Component } from "react";
import { Button, Modal, ModalBody } from "reactstrap";
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
      <div>

        <Button
        color="link"
          style={{
            color: "white",
          }}
          onClick={() => this.setState({ modal: true })}
        >
          Account
          
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