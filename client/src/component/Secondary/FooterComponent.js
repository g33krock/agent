import React, { Component } from "react";
import { Col, Row, Image } from "react-bootstrap";
import { agentService } from "../../services/AgentService";

export class Footer extends Component {
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
    return (
      <>
        {this.state.agent &&
          this.state.agent.map((ag) => (
            <Row key={ag.toString()} style={{backgroundColor:"black", width: "101%", paddingTop: "1%", paddingBottom: "1%"}}>
              <Row style={{marginLeft: "auto", marginRight: "auto"}}>
                  <Col xs={2} sm={3} md={4} />
                    {ag.facebook && (
                      <Col style={{padding: "1%"}}>
                        <a href={ag.facebook}>
                          <Image
                            fluid
                            src="https://jwvonytjrpiueyuwsjpa.supabase.in/storage/v1/object/public/icons/Facebook.ico"

                          />
                        </a>
                      </Col>
                    )}
                    {ag.twitter && (
                      <Col style={{padding: "1%"}}>
                        <a href={ag.twitter}>
                        <Image
                            fluid
                            src="https://jwvonytjrpiueyuwsjpa.supabase.in/storage/v1/object/public/icons/Twitter.ico"

                          />
                        </a>
                      </Col>
                    )}
                    {ag.instagram && (
                      <Col style={{padding: "1%"}}>
                        <a href={ag.instagram}>
                        <Image
                            fluid
                            src="https://jwvonytjrpiueyuwsjpa.supabase.in/storage/v1/object/public/icons/Instagram.ico"

                          />
                        </a>
                      </Col>
                    )}
                    {ag.tiktok && (
                      <Col style={{padding: "1%"}}>
                        <a href={ag.tiktok}>
                        <Image
                            fluid
                            src="https://jwvonytjrpiueyuwsjpa.supabase.in/storage/v1/object/public/icons/TikTok.ico"

                          />
                        </a>
                      </Col>
                    )}
                    {ag.youtube && (
                      <Col style={{padding: "1%"}}>
                        <a href={ag.youtube}>
                        <Image
                            fluid
                            src="https://jwvonytjrpiueyuwsjpa.supabase.in/storage/v1/object/public/icons/YouTube.ico"

                          />
                        </a>
                      </Col>
                    )}
                    {ag.pinterest && (
                      <Col style={{padding: "1%"}}>
                        <a href={ag.pinterest}>
                        <Image
                            fluid
                            src="https://jwvonytjrpiueyuwsjpa.supabase.in/storage/v1/object/public/icons/Pinterest.ico"

                          />
                        </a>
                      </Col>
                    )}
                    <Col xs={2} sm={3} md={4} />
                    </Row>
            </Row>
          ))}
      </>
    );
  }
}
