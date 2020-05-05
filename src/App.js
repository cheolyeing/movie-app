import React from "react";

class App extends React.Component {
  /* Component Life Cycle
   * (1) render -> componentDidMount
   * (2) if I call setState -> render -> componentDidUpdate
   * (3) if I leave the page -> componentWillUnmout
   */

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

  componentDidMount() {
    console.log("Component rendered");
  }

  componentDidUpdate() {
    console.log("I just updated");
  }

  componentWillUnmount() {
    // 컴포넌트가 죽을때 사용됨.
    console.log("Goodbye, world");
  }

  render() {
    console.log("I'm rendering");
    return (
      <div>
        <h1>The number is {this.state.num}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
