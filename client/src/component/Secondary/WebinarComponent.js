import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { agentService } from "../../services/AgentService";
import $ from 'jquery';

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

      <Container
      style={{
        backgroundImage: `-webkit-linear-gradient(45deg, ${this.props.agent.primaryColor} 50%, ${this.props.agent.secondaryColor} 50%)`,
        // borderRadius: "15px",
        alignContent: "right",
        // marginBottom: "5px",
        // marginTop: "5px"
      }}
    >
      <Row style={{ minHeight: "300px", marginTop: "5%" }}>
        <Col>                   
          <h1 className="tag" style={{ color: `${this.props.agent.textColor}`, textShadow: "1px 1px black", fontSize: "350%", marginTop: "10%" }}>
            What is MPI®?
          </h1>
        </Col>
        <Col style={{paddingLeft: "0px" }}>
          <iframe
            width="507"
            height="285"
            src="https://www.youtube.com/embed/9YsYutkBryE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{  boxShadow: "2px 2px rgba(0, 0, 0, 0.5)", paddingLeft: "0px", marginBottom: "10%"  }}
          ></iframe>
        </Col>
      </Row>
    </Container>

    );
  }
}
