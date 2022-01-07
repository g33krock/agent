import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { agentService } from "../../services/AgentService";
import $ from 'jquery';
import { ButtonBar } from "./ButtonBarComponent";

export class Webinar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agent: this.props.agent,
    };
  }

  async componentDidMount() {
    const ID = this.props.Id;
    const agentObject = { agentID: ID };
    const agent = await agentService.one(agentObject);
    this.setState({ agent });
  }

  render() {
    $(document).on("scroll", function() {
      var pageTop = $(document).scrollTop();
      var pageBottom = pageTop + $(window).height();
      var tags = $(".tag");
    
      for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];
    
        if ($(tag).position().top < pageBottom) {
          $(tag).addClass("visible");
        } else {
          $(tag).removeClass("visible");
        }
      }
    });
    return (


      <iframe src="https://compoundinterest.clickfunnels.com/auto-webinar-registrationhpa135ci" title="Webinar Registration" width="100%" height="100%"></iframe>
  

    );
  }
}
