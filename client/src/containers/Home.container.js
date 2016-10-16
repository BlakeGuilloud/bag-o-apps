import React                  from 'react';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import { HomeComponent }      from '../components';

class Home extends React.Component {

  static propTypes = {
    children: React.PropTypes.node,
  };

  state = {}

  render() {
    const props = {};

    return (
      <div>
        <HomeComponent />
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
