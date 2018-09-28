import React from "react";
import "../styles.css";

let offices = [
  {
    img: "https://www.docplanner.com/images/warsaw.png",
    name: "  Warsaw "
  },
  {
    img: "https://www.docplanner.com/images/barcelona.png",
    name: "  Barcelona"
  },
  {
    img: "https://www.docplanner.com/images/istanbul.png",
    name: "Istanbul"
  },
  {
    img: "https://www.docplanner.com/images/rome.png",
    name: "Rome"
  },
  {
    img: "https://www.docplanner.com/images/mexico-city.png",
    name: " Mexico City"
  },
  {
    img: "https://www.docplanner.com/images/curitiba.png",
    name: " Curitiba"
  }
];
const OfficeCard = props => {
  return (
    <div className="offices-item">
      <a href="#">
        <img className="office-image" src={props.item.img} />

        <div className="office-desc">
          {props.item.name}
          <span className="option-button">See openings</span>{" "}
        </div>
      </a>
    </div>
  );
};
const Offices = () => {
  return (
    <section className="offices-section">
      <h1 className="offices-section-title">
        Improve the lives of millions. Change yours forever
      </h1>
      <p className="offices-section-description">
        More than 500 team mates share our same vision, goals and passion. With
        offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and Curitiba,
        our search for great talent never stops.
      </p>
      <div className="offices-slider">
        {offices.map((el, i) => {
          return <OfficeCard key={i} item={el} />;
        })}
      </div>
    </section>
  );
};

export default Offices;
