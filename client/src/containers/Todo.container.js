import React              from 'react';
import { connect }        from 'react-redux';
import { TodoComponent }  from '../components';


class TodoContainer extends React.Component {

  static propTypes = {
    todos: React.PropTypes.array,
    addTodo: React.PropTypes.func,
    deleteTodo: React.PropTypes.func,
    editTodo: React.PropTypes.func,
  };

  render() {
    const props = {};

    return (<TodoComponent />);
  }
}

function mapStateToProps(state) {
  const {} = state;
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
