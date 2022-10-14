"use strict";

const dummy_data = [
  {
    id: "1",
    title: "task 1",
  },
  {
    id: "2",
    title: "task 2",
  },
  {
    id: "3",
    title: "task 3",
  },
  {
    id: "4",
    title: "task 4",
  },
  {
    id: "5",
    title: "task 5",
  },
];

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      data: dummy_data,
      index: 0,
    };
  }

  getInputText(text) {
    this.setState((prevState) => ({
      data: [...prevState.data, { title: text }],
    }));
  }

  deleteHandler(index) {
    this.setState({ index: index }, () => {
      this.setState({
        data: this.state.data.filter((item) => {
          return item !== this.state.data[this.state.index];
        }),
      });
    });
  }

  render() {
    return (
      <div className="main">
        {/* headings */}
        <div className="heading-block">
          {/* heading 1 */}
          <h1 className="heading1">Todo List</h1>
          {/* heading 2 */}
          <h2 className="heading2">
            A simple Todo List App written on ReactJS
          </h2>
        </div>
        {/* todos */}
        <div className="todos-block">
          {this.state.data.map((item, index) => {
            return (
              <TodoItem
                key={index}
                title={item.title}
                index={index}
                deleteHandler={this.deleteHandler.bind(this)}
              />
            );
          })}
        </div>
        {/* add new todo */}
        <NewTodo getInputText={this.getInputText.bind(this)} />
      </div>
    );
  }
}

// todo item
class TodoItem extends Todo {
  constructor(props) {
    super(props);
  }

  currentElementIndexSender() {
    this.props.deleteHandler(this.props.index);
  }

  render() {
    return (
      <div className="todos">
        <span className="todos-text">{this.props.title}</span>
        <div className="todos-buttons">
          <button
            className="btn todos-delete"
            onClick={this.currentElementIndexSender.bind(this)}
          >
            delete
          </button>
        </div>
      </div>
    );
  }
}

// new todo
class NewTodo extends Todo {
  constructor(props) {
    super(props);

    this.state = { value: "" };
  }

  addTodoHandler() {
    if (this.state.value) {
      this.setState({ value: "" });
      this.props.getInputText(this.state.value);
    } else {
      return;
    }
  }

  render() {
    return (
      <div className="new-todo">
        <span className="new-todo-title">write new todo</span>
        <div className="new-todo-form">
          <input
            type="text"
            className="new-todo-input"
            value={this.state.value}
            onChange={(event) => {
              this.setState({ value: event.target.value });
            }}
          />
          <button
            className="btn new-todo-button"
            onClick={this.addTodoHandler.bind(this)}
          >
            add todo
          </button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Todo />, document.getElementById("root"));
