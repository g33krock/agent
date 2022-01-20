import React, { Component } from "react";
import {Image } from "react-bootstrap";
import {Modal, ModalBody, Button } from "reactstrap";

export class FAQVideo extends Component {
    constructor(props) {
      super(props);
      this.state = {
        modal: false,
        faq: this.props.faq,
      };
    }
  
  
    toggle() {
      return !this.state.modal;
    }
  
    render() {
      return (
              <div style={{marginTop: "5%"}} className="videoPoster">
                <Image
                fluid
                src={this.props.faq.poster}
                alt={this.props.faq.question}
                  onClick={() => this.setState({modal: true})}
                />


   
                <Modal isOpen={this.state.modal} toggle={() => this.toggle()}>
                  <ModalBody>
                  <iframe
                      width="853"
                      height="480"
                      src={this.props.faq.video}
                      title={this.props.faq.question}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{width: '100%'}}
                    ></iframe>
                  </ModalBody>
                    <Button
                    //   style={{backgroundColor: this.state.agent.secondaryColor}}
                      onClick={() => this.setState({modal: false})}
  
                    >
                      Close
                    </Button>
                </Modal>
   
              </div>
      );
    }
  }