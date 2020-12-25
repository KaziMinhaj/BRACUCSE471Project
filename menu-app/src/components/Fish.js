import React from "react";
import "./style.css"

class Fish extends React.Component {
  render() {
    const { image, name, price, desc, status } = this.props.details;
    const isAvailable = status === "available";
    return (
        <div className="card-group">
             <div className="container mt-5">
          <div className="card card-style" >
          <img src={image} alt={name} />
    <div className="card-body">
    <h5 className="card-title">
        {name}
        <span>{price}</span>
    </h5>
    <p className="card-text">{desc}</p>
    <button className="btn btn-dark"
          disabled={!isAvailable}
          onClick={() => this.props.addToOrder(this.props.index)}
        >
          {isAvailable ? "Add To Order" : "Sold Out!"}
        </button>
  </div>
</div>      
      </div>
        </div>
     
    );
  }
}

export default Fish;
