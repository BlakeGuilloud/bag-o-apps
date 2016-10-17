import React                  from 'react';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import { HeaderComponent }    from '../components';

class Header extends React.Component {

  static propTypes = {
    children: React.PropTypes.node,
  };

  state = {}

  render() {
    const props = {};

    return (
      <div>
        <HeaderComponent />
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
