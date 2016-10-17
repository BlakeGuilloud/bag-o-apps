import React       from 'react';
import { connect } from 'react-redux';
import { Todo }    from '../components';


class TodoContainer extends React.Component {

  static propTypes = {};

  render() {
    const props = {};

    return (<Todo />);
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
