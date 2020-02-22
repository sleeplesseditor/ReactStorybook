import React, { useState, useEffect } from "react";
import "./Accordian.scss";

const Accordian = (props) => {
  const [accordionData, accordionSetter] = useState([]);
  const [selectedIndex, indexSelector] = useState(-1);

  useEffect(() => {
    accordionSetter(props.data)
  }, [])

  const toggleAccordian = index => {
    if (index === selectedIndex) {
      index = -1;
    }
    indexSelector(index);
  };

    return (
      <section className="accordian-block-wrapper">
        {accordionData.map((info, index) => {
          return (
            <div className="accordian-inner-wrapper" key={index}>
              <div className="tile" onClick={() => toggleAccordian(index)}>
                {info.heading}
                <span className="symbol">{`${selectedIndex === index ? "-" : "+"}`}</span>
              </div>
              {selectedIndex === index && (
                <div className="body">{info.body}</div>
              )}
            </div>
          );
        })}
      </section>
    );
}

export default Accordian;