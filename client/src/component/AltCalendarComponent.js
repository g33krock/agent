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
    console.log(this.state.agent);
    return (
            <div>
              <Button
                style={{
                  backgroundColor: `black`,
                  border: "none",
                  color: `white`,
                  width: "200px",
                }}
                onClick={() => this.setState({modal: true})}
              >
                SCHEDULE A 1 ON 1
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
                    style={{backgroundColor: "secondary"}}
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
