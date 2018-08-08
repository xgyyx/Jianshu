import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class Write extends PureComponent {
  render () {
    const {loginState} = this.props;
    if (loginState) {
      return (
        <div>write article page</div>
      )
    } else {
      return <Redirect to='/login'></Redirect>
    }
  }
}

const mapStateToProps = (state) => ({
  loginState: state.getIn(['login', 'loginState'])
});

export default connect(mapStateToProps, null)(Write);