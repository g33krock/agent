import React, { Component } from "react";
import { Button, Modal, ModalBody } from "reactstrap";
import { InlineWidget } from "react-calendly";

export class ReadyCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      agent: this.props.agent,
      shop: "none",
      sched: "none",
    };
  };

  componentDidMount() {
      console.log(this.props.deposit)
    if (this.props.deposit === true) {
      this.setState({ shop: "none" });
      this.setState({ sched: "block" });
    } else {
      this.setState({ shop: "block" });
      this.setState({ sched: "none" });
    }
    console.log(this.state.shop)
  };

  toggle() {
    return !this.state.modal;
  };

  render() {
      const shop = () => {if (this.props.deposit === true) {return "none"} else {return "none"}}
      const sched = () => {if (this.props.deposit === true) {return "block"} else {return "block"}}
    return (
      <>
        <Button
          className="whatIsMPIButton"
          style={{display:shop()}}
          href="/shopify"
        >
          <h2>I AM READY</h2>
        </Button>
        <Button
          className="whatIsMPIButton"
          style={{display:sched()}}
          onClick={() => this.setState({ modal: true })}
        >
          <h2>I AM READY</h2>
        </Button>

        <Modal isOpen={this.state.modal} toggle={() => this.toggle()}>
          <ModalBody>
            <InlineWidget url={this.state.agent.calendly} />
          </ModalBody>
          <Button
            style={{ backgroundColor: this.state.agent.secondaryColor }}
            onClick={() => this.setState({ modal: false })}
          >
            Close
          </Button>
        </Modal>
      </>
    );
  }
}
