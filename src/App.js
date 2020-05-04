import React from "react";

class App extends React.Component {
  state = {
    num: 0,
  };

  add = () => {
    this.setState((current) => ({
      num: current.num + 1,
    }));
  };

  minus = () => {
    this.setState((current) => ({
      num: current.num - 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>number is {this.state.num}</h1>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    );
  }
}

export default App;
