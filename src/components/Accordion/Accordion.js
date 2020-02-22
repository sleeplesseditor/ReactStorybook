import React, { Component } from "react";
import "./Accordion.scss";

class Accordian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      selectedIndex: -1
    };
  }

  toggleAccordian = index => {
    if (index === this.state.selectedIndex) {
      index = -1;
    }
    this.setState({
      selectedIndex: index
    });
  };

  render() {
    return (
      <section className="accordian-block-wrapper">
        {this.state.data.map((info, index) => {
          return (
            <div className="accordian-inner-wrapper" key={index}>
              <div className="tile" onClick={() => this.toggleAccordian(index)}>
                {info.heading}
                <span className="symbol">{`${this.state.selectedIndex === index ? "-" : "+"}`}</span>
              </div>
              {this.state.selectedIndex === index && (
                <div className="body">{info.body}</div>
              )}
            </div>
          );
        })}
      </section>
    );
  }
}

export default Accordian;