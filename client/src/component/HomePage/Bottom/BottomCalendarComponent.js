import React, { Component } from "react";
import { Button, Modal, ModalBody } from "reactstrap";
import { InlineWidget } from "react-calendly";

export class BottomCalendar extends Component {
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
      <div>
        <Button
          style={{
            // backgroundColor: `${this.props.agent.primaryColor}`,
            backgroundColor: `black`,
            width: "100%",
            border: "none",
            boxShadow: "2px 2px rgba(0, 0, 0, 0.5)",
            color: `white`,
            marginBottom: "5px",
            textShadow: "1px 1px black"
          }}
          onClick={() => this.setState({ modal: true })}
        >
          SCHEDULE A 1 ON 1 WITH AN
          <br />
          MPI® CERTFIED ADVISOR
        </Button>

        <Modal isOpen={this.state.modal} toggle={() => this.toggle()}>
          <ModalBody>
            <InlineWidget url={this.state.agent.calendly} />
          </ModalBody>
          <Button
            style={{ backgroundColor: this.state.agent.secondaryColor, textShadow: "1px 1px black" }}
            onClick={() => this.setState({ modal: false })}
          >
            Close
          </Button>
        </Modal>
      </div>
    );
  }
}
