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

  componentDidMount() {
    this.props.todoActions.fetchTodos();
  }

  render() {
    console.log('this props', this.props);
    const props = {};

    return (<TodoComponent />);
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
