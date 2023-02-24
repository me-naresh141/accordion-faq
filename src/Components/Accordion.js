import React from "react";
import faqs from "../data.json";
class Accordion extends React.Component {
  constructor() {
    super();
    this.state = {
      activeIndex: null,
    };
  }
  render() {
    return (
      <>
        <h1>Accordion FAQ</h1>
        <ul>
          {faqs.map((faq, index) => (
            <li>
              <h2
                className="question"
                onClick={() => {
                  this.setState({ activeIndex: index });
                }}
              >
                {faq.Q}
                {this.state.activeIndex === index ? "👆" : "👇"}
              </h2>

              {index === this.state.activeIndex && (
                <p className="answer">{faq.A}</p>
              )}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Accordion;
