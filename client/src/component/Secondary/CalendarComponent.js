import React, { Component } from "react";
import { Button, Modal, ModalBody } from "reactstrap";
import { InlineWidget } from "react-calendly";
import { agentService } from "../../services/AgentService";

export class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      agent: [],
    };
  }

  async componentDidMount() {
    const ID = this.props.Id;
    const agentObject = { agentID: ID };
    const agent = await agentService.one(agentObject);
    this.setState({ agent });
  }

  toggle() {
    return !this.state.modal;
  }

  render() {
    return (
      <div style={{ position: "sticky", top: "25%" }}>
        <Button
          style={{
            backgroundColor: `black`,
            border: "none",
            color: `white`,
            width: "200px",
            textShadow: "1px 1px black"
          }}
          onClick={() => this.setState({ modal: true })}
          className="rotateRight"
        ><p className="upsidedown">
          RESERVE YOUR SPOT
          </p>
        </Button>

        <Modal isOpen={this.state.modal} toggle={() => this.toggle()}>
          {/* <Modal.Header>
                  <Modal.Title style={{ fontFamily: "Montserrat" }}>
                    Schedule an Appointment
                  </Modal.Title>
                </Modal.Header> */}
          <ModalBody>
            {this.state.agent &&
              this.state.agent.map((ag) => <InlineWidget url={ag.calendly} key={ag.calendly}/>)}
          </ModalBody>
          {/* <Modal.Footer> */}
          <Button
            style={{ backgroundColor: "secondary" }}
            onClick={() => this.setState({ modal: false })}
          >
            Close
          </Button>
          {/* </Modal.Footer> */}
        </Modal>
      </div>
    );
  }
}