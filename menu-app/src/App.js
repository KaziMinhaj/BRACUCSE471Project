import React, { Component } from 'react';
import SampleFishes from './sample-fish'
import Fish from './components/Fish'
import Order from './components/Order';

class App extends Component {
  state = {
    fishes : {},
    order: {}
  };

  componentDidMount(){
    this.setState({ fishes : SampleFishes})
  };

  addToOrder=(key)=>{
    //1.take a copy of the order
    const order = {...this.state.order};
    //2.add to order
    order[key]=order[key]+1 || 1;
    //3.update the order with setState
    this.setState({order})

  };

  render() {
    return (
      <div >
        <div className="container mt-5 card-group col-lg-9">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
        </div>
        <div className="container col-lg-6">
          <Order
            order={this.state.order}
            fishes={this.state.fishes}
          />
        </div>
      </div>
    );
  }
}

export default App;
