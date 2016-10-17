import React                  from 'react';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import { TodoComponent }      from '../components';
import * as TodoActions       from '../actions/Todo.actions';


class TodoContainer extends React.Component {

  static propTypes = {
    todos: React.PropTypes.array,
    addTodo: React.PropTypes.func,
    deleteTodo: React.PropTypes.func,
    editTodo: React.PropTypes.func,
  };

  state = {
    title: '',
  }

  componentDidMount() {
    this.props.todoActions.fetchTodos();
  }

  handleChange = (event) => {
    const newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  createTodo = (event) => {
    event.preventDefault();
    const todo = {
      title: this.state.title,
    }
    this.props.todoActions.createTodo(todo);
  }

  render() {
    const props = {
      todos: this.props.todos,
      handleChange: this.handleChange,
      createTodo: this.createTodo,
    };

    return (<TodoComponent {...props} />);
  }
}

function mapStateToProps(state) {
  const { todo } = state;
  return {
    todos: todo.todos,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    todoActions: bindActionCreators(TodoActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
