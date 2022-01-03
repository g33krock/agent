import React, { Component } from "react";
import { Button, Modal, ModalBody } from "reactstrap";
import { InlineWidget } from "react-calendly";

export class AltCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      agent: this.props.agent,
    };
  }


  toggle() {
    return !this.state.modal;
  }

  render() {
    return (
            <div style={{marginTop: "5%"}}>
              <Button
                style={{
                  // backgroundColor: this.state.agent.secondaryColor,
                  backgroundColor: "black",
                  border: "none",
                  color: `white`,
                  width: "300px",
                  textShadow: "1px 1px black",
                  boxShadow: "2px 2px rgba(0, 0, 0, 0.5)",
                }}
                onClick={() => this.setState({modal: true})}
              >
                SCHEDULE A 1 ON 1 WITH AN<br />MPI® CERTFIED ADVISOR
              </Button>
 
              <Modal isOpen={this.state.modal} toggle={() => this.toggle()}>
                {/* <Modal.Header>
                  <Modal.Title style={{ fontFamily: "Montserrat" }}>
                    Schedule an Appointment
                  </Modal.Title>
                </Modal.Header> */}
                <ModalBody>
                  <InlineWidget url={this.state.agent.calendly} />
                </ModalBody>
                {/* <Modal.Footer> */}
                  <Button
                    style={{backgroundColor: this.state.agent.secondaryColor}}
                    onClick={() => this.setState({modal: false})}

                  >
                    Close
                  </Button>
                {/* </Modal.Footer> */}
              </Modal>
 
            </div>
    );
  }
}
