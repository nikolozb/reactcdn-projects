const btnStyles = {
  padding: "6px 18px",
  fontSize: "32px",
  marginLeft: "12px",
};

class Counter extends React.Component {
  constructor() {
    super();

    this.state = { count: 0 };
  }

  increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  decrement() {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ textTransform: "uppercase", fontSize: "48px" }}>
          Counter
        </h1>
        <h2 style={{ fontSize: "60px" }}>{this.state.count}</h2>
        <div>
          <button style={btnStyles} onClick={this.increment.bind(this)}>
            +
          </button>
          <button style={btnStyles} onClick={this.decrement.bind(this)}>
            -
          </button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("root"));
