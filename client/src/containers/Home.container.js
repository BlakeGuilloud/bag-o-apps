import React                  from 'react';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import { Header }             from './';

class Home extends React.Component {

  static propTypes = {
    children: React.PropTypes.node,
  };

  state = {}

  render() {
    const props = {};

    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {} = state;
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
