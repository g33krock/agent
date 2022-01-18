import React, { Component } from "react";
// import { Row, div, Container } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { agentService } from "../../services/AgentService";

export class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agent: [],
      addAgents: [],
      bioDisplay: "",
    };
  }

  async componentDidMount() {
    const ID = this.props.Id;
    const agentObject = { agentID: ID };
    const agent = await agentService.one(agentObject);
    this.setState({ agent });
    const addAgents = await agentService.addAgents(agentObject);
    this.setState({ addAgents });
    this.setState({ bioDisplay: "none" });
  }

  render() {
    // eslint-disable-next-line no-restricted-globals
    console.log(document.documentElement.clientWidth);
    // eslint-disable-next-line no-restricted-globals
    const cMode = () => {
      if (document.documentElement.clientWidth > 690) {
        return true;
      } else {
        return false;
      }
    };
    // eslint-disable-next-line no-restricted-globals
    const cSliderPercent = () => {
      if (document.documentElement.clientWidth > 690) {
        return 33;
      } else {
        return 100;
      }
    };
    return (
      <div>
        <h1 style={{ marginBottom: "0px", fontSize: "300%", marginTop: "3%" }}>
          <strong>Testimonials</strong>
        </h1>
        <div
          style={{
            backgroundColor: this.props.agent.primaryColor,
            height: "2px",
            // position: "absolute",
            // top: "20%",
            width: "50vw",
            marginBottom: "1%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        ></div>
        {this.state.agent &&
          this.state.agent.map((ag) => (
            <Carousel
              showIndicators={false}
              showArrows={false}
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
              autoPlay={true}
              interval={6100}
              centerMode={cMode()}
              centerSlidePercentage={cSliderPercent()}
              key={ag.toString()}
              style={{
                backgroundColor: "white",
              }}
            >
              <div
                style={{
                  marginBottom: "15%",
                  marginLeft: "1%",
                  marginRight: "1%",
                }}
              >
                <img
                  src="https://jwvonytjrpiueyuwsjpa.supabase.in/storage/v1/object/public/images/Porter S Square.png"
                  alt="Porter Shumway"
                />
                <h1 style={{ color: "black" }}>Porter Shumway</h1>
                <h3 style={{ color: "black" }}>CEO Salt River Financial</h3>

                <p style={{ color: "black" }}>
                  “I have worked closely with financial planners for years. The
                  MPI® system takes traditional, and often times overly complex
                  retirement planning, and simplifies it for the masses. Now, it
                  isn’t just the wealthy that have access to a bright financial
                  future. This conservative yet extremely efficient approach
                  allows for investors to feel confident that they have
                  minimized risk while maximizing long-term growth.”
                </p>
              </div>
              <div
                style={{
                  marginBottom: "15%",
                  marginLeft: "1%",
                  marginRight: "1%",
                }}
              >
                <img
                  src="https://jwvonytjrpiueyuwsjpa.supabase.in/storage/v1/object/public/images/Ken Kilday Square.png"
                  alt="Ken Kilday"
                />
                <h1 style={{ color: "black" }}>Ken Kilday</h1>
                <h2 style={{ color: "black" }}>RCC®, CFP®</h2>

                <p style={{ color: "black" }}>
                  “I was struck how Curtis has brought his visionary innovation
                  to retirement planning, teaching concepts about compound
                  interest I believe are life changing. Curtis’ approach
                  rethinks every assumption we planners have been taught about
                  money, encourages all to use money wisely, and rewards our
                  efforts through discipline to “Always Be Compounding!”. A
                  generous retirement is no longer reserved exclusively for the
                  wealthy.”
                </p>
              </div>
              <div
                style={{
                  marginBottom: "15%",
                  marginLeft: "1%",
                  marginRight: "1%",
                }}
              >
                <img
                  src="https://jwvonytjrpiueyuwsjpa.supabase.in/storage/v1/object/public/images/Porter S Square.png"
                  alt="Porter Shumway"
                />
                <h1 style={{ color: "black" }}>Porter Shumway</h1>
                <h2 style={{ color: "black" }}>CEO Salt River Financial</h2>

                <p style={{ color: "black" }}>
                  “I have worked closely with financial planners for years. The
                  MPI® system takes traditional, and often times overly complex
                  retirement planning, and simplifies it for the masses. Now, it
                  isn’t just the wealthy that have access to a bright financial
                  future. This conservative yet extremely efficient approach
                  allows for investors to feel confident that they have
                  minimized risk while maximizing long-term growth.”
                </p>
              </div>
              <div
                style={{
                  marginBottom: "15%",
                  marginLeft: "1%",
                  marginRight: "1%",
                }}
              >
                <img
                  src="https://jwvonytjrpiueyuwsjpa.supabase.in/storage/v1/object/public/images/Ken Kilday Square.png"
                  alt="Ken Kilday"
                />
                <h1 style={{ color: "black" }}>Ken Kilday</h1>
                <h2 style={{ color: "black" }}>RCC®, CFP®</h2>

                <p style={{ color: "black" }}>
                  “I was struck how Curtis has brought his visionary innovation
                  to retirement planning, teaching concepts about compound
                  interest I believe are life changing. Curtis’ approach
                  rethinks every assumption we planners have been taught about
                  money, encourages all to use money wisely, and rewards our
                  efforts through discipline to “Always Be Compounding!”. A
                  generous retirement is no longer reserved exclusively for the
                  wealthy.”
                </p>
              </div>
            </Carousel>
          ))}
      </div>
    );
  }
}
