import React                  from 'react';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import { MeComponent }        from '../components';

class Me extends React.Component {

  static propTypes = {
    children: React.PropTypes.node,
  };

  state = {}

  render() {
    const props = {};

    return (<MeComponent />);
  }
}

function mapStateToProps(state) {
  const {} = state;
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Me);
