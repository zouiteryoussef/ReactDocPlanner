import React from "react";
import "../styles.css";

let data = [
  {
    color: "#00b3b9",
    cible: "For patients",
    title: "Find a doctor, book a visit and solve any health-related doubt",
    hasSelect: true,
    selectOptions: [
      "choose a country",
      "lorem",
      "lorem",
      "lorem",
      "lorem",
      "lorem"
    ],
    image: "https://www.docplanner.com/img/screen-marketplace@2x.png"
  },
  {
    color: "#3d83df",
    cible: "For doctors",
    title: "Save time managing visits and cut no-shows by half",
    hasSelect: false,
    image: "https://www.docplanner.com/img/screen-saas@2x.png"
  }
];

const Card = props => {
  return (
    <div
      className="service-item "
      style={{ "background-color": props.item.color }}
    >
      <p className="service-cible">{props.item.cible}</p>
      <h3 className="service-title">{props.item.title}</h3>
      <div className="service-item-content">
        {props.item.hasSelect && (
          <select name="" id="" className="service-patients-select">
            {props.item.selectOptions.map(el => {
              return <option value="lorem">{el}</option>;
            })}
          </select>
        )}

        <figure className="service-item-screen">
          <img src={props.item.image} width="350" />
        </figure>
      </div>
    </div>
  );
};
class Services extends React.Component {
  render() {
    return (
      <section className="services-section">
        {data.map((el, i) => <Card item={el} key={i} />)}
      </section>
    );
  }
}

export default Services;
