"use strict";

// main component
class Expenses extends React.Component {
  constructor() {
    super();
    this.state = {
      balance: 0,
      income: 0,
      expense: 0,
      input: 0,
    };
  }

  getIncome(amount) {
    this.setState(
      (prevState) => ({
        income: prevState.income + Number(amount),
      }),
      () => {
        this.setState({ balance: this.state.income - this.state.expense });
      }
    );
  }

  getExpense(amount) {
    this.setState(
      (prevState) => ({
        expense: prevState.expense + Number(amount),
      }),
      () => {
        this.setState({ balance: this.state.income - this.state.expense });
      }
    );
  }

  render() {
    return (
      <div className="expenses-main">
        {/* heading 1 */}
        <h1 className="expenses-heading1">expense tracker</h1>
        <BalanceBox balance={this.state.balance} />
        {/* total results */}
        <TotalResults income={this.state.income} expense={this.state.expense} />
        {/* heading 2 */}
        <h2 className="expenses-heading2">Add new transaction</h2>
        {/* primary operations */}
        <Operations
          getIncome={this.getIncome.bind(this)}
          getExpense={this.getExpense.bind(this)}
        />
      </div>
    );
  }
}

// balance box component
class BalanceBox extends Expenses {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="balance">
        <span className="balance-heading">total balance:</span>
        <span className="balance-amount">${this.props.balance}</span>
      </div>
    );
  }
}

// total results component
class TotalResults extends Expenses {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="total">
        <div className="total-block">
          <span className="total-title green">income:</span>
          <span className="total-amount">{this.props.income}$</span>
        </div>
        <div className="total-block">
          <span className="total-title red">expense:</span>
          <span className="total-amount">{this.props.expense}$</span>
        </div>
      </div>
    );
  }
}

// operations component
class Operations extends Expenses {
  constructor(props) {
    super(props);

    this.state = { value: 0 };
  }

  render() {
    return (
      <div className="operation">
        <input
          type="number"
          className="operation-field"
          onChange={(event) => {
            this.setState({ value: event.target.value });
          }}
        />
        <button
          className="operation-button"
          style={{ backgroundColor: "green" }}
          onClick={() => {
            this.props.getIncome(this.state.value);
          }}
        >
          Income
        </button>
        <button
          className="operation-button"
          style={{ backgroundColor: "red" }}
          onClick={() => {
            this.props.getExpense(this.state.value);
          }}
        >
          Expense
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Expenses />, document.getElementById("root"));
