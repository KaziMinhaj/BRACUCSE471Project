import React, { Component } from 'react';

class Order extends Component {
    renderOrder = key => {
        const fish = this.props.fishes[key];
        const count = this.props.order[key];
        const isAvailable = fish && fish.status === "available";
        // Make sure the fish is loaded before we continue!
        if (!fish) return null;
        // if fish is not available then say sorry
        if (!isAvailable) {
          return (
            <li key={key}>
              Sorry {fish ? fish.name : "fish"} is no longer available
            </li>
          );
        }
        //else calculate price 
        return (
          <li key={key}>
            {count} lbs {fish.name}
            {count * fish.price}
          </li>
        );
      };
    render() {
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal, key) => {
        const fish = this.props.fishes[key];
        const count = this.props.order[key];
        const isAvailable = fish && fish.status === "available";
        if (isAvailable) {
            return prevTotal + count * fish.price;
        }
            return prevTotal;
        }, 0);
    
        return (
                <div className="card card-style orderItems">
                  <div class="card-header text-center">
                  Your Bag
                  </div>
                  <ul className="list-group list-group-flush card-style">
                      <li className="list-group-item">{orderIds.map(this.renderOrder)}
                      </li>
                    </ul>
                  <div className=" btn btn-success">
                    Total:
                    <strong>{total}</strong>
                  </div>
                </div>
        );
    }
}

export default Order;