import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  Addition,
  Button
} from './style';

class Header extends Component {

  render () {
    const {focused, handleInputFocus, handleInputBlur} = this.props;
    return (
      <HeaderWrapper>
        <Logo></Logo>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>
            <i className='iconfont'>&#xe636;</i>
          </NavItem>
          <NavItem className='right'>登录</NavItem>
          <SearchWrapper>
            <CSSTransition
              timeout={200}
              in={focused}
              classNames="slide"
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont' : 'iconfont'}>
              &#xe639;
            </i>
            {this.getListArray(focused)}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='article'>
          <i className='iconfont'>&#xe618;</i>
            写文章
          </Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }

  getListArray (show) {
    if (!show) {
      return null;
    }
    return (
      <SearchInfo>
        <SearchInfoTitle>
          热门搜索
          <SearchInfoSwitch>换一批</SearchInfoSwitch>
        </SearchInfoTitle>
        <div>
          {
            this.props.list.map((item) => (
              <SearchInfoItem key={item}>{item}</SearchInfoItem>
            ))
          }
        </div>
      </SearchInfo>
    );
  }
}

const mapStateToProps = (state) => ({
  // focused: state.get('header').get('focused')
  focused: state.getIn(['header', 'focused']),
  list: state.getIn(['header', 'list'])
});

const mapDispatchToProps = (dispatch) => ({
  handleInputFocus () {
    dispatch(actionCreators.getList());
    dispatch(actionCreators.headerSearchFocusAction());
  },
  handleInputBlur () {
    dispatch(actionCreators.headerSearchBlurAction());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);