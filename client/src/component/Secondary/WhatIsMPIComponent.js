import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { agentService } from "../../services/AgentService";
import $ from "jquery";
import { ButtonBar } from "./ButtonBarComponent";

export class WhatIsMPI extends Component {
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
    $(document).on("scroll", function () {
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
          backgroundImage: `-webkit-linear-gradient(45deg, ${this.props.agent.primaryColor} 45%, ${this.props.agent.secondaryColor} 45%)`,
          // borderRadius: "15px",
          alignContent: "right",
          // marginBottom: "5px",
          // marginTop: "5px",
        }}
      >
        <Row style={{marginTop: "2%", marginBottom: "2%" }}>
          <Col className="tag">
            <h1
              style={{
                color: `${this.props.agent.textColor}`,
                textShadow: "1px 1px black",
                fontSize: "350%",
                marginTop: "10%",
              }}
            >
              What is MPI®?
            </h1>
            <ButtonBar agent={this.props.agent} Id={this.props.agent.id} />
          </Col>
          <Col>
            <Container className="videoWrapper documentaryContainer" style={{zIndex:"0"}}>
              <iframe
                width="853"
                height="480"
                src="https://www.youtube.com/embed/9YsYutkBryE"
                title="Welcome to Compound Interest"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Container>
          </Col>
        </Row>
        <Row style={{ backgroundColor: "white" }}>
          <Col style={{ margin: "auto" }}>
            <h3 className="asSeenOn">As Seen On</h3>
          </Col>
          <Col style={{ margin: "auto" }}>
            <Image
              src="https://jwvonytjrpiueyuwsjpa.supabase.in/storage/v1/object/public/icons/Forbes-logo black.png"
              alt="Forbes Black Logo"
              style={{ width: "10vw", margin: "auto" }}
            />
          </Col>
          <Col style={{ margin: "auto" }}>
            <Image
              src="https://jwvonytjrpiueyuwsjpa.supabase.in/storage/v1/object/public/icons/YahooFinanceLogo-black.png"
              alt="Yahoo Finance Black Logo"
              style={{ width: "10vw", margin: "auto" }}
            />
          </Col>
          <Col style={{ margin: "auto" }}>
            <Image
              src="https://jwvonytjrpiueyuwsjpa.supabase.in/storage/v1/object/public/icons/entrepreneurblack.png"
              alt="Entrepreneur Black Logo"
              style={{ width: "10vw", margin: "auto" }}
            />
          </Col>
          <Col style={{ margin: "auto" }}>
            <Image
              src="https://jwvonytjrpiueyuwsjpa.supabase.in/storage/v1/object/public/icons/stockhouse-black.png"
              alt="Stockhouse Black Logo"
              style={{ width: "10vw", margin: "auto" }}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}