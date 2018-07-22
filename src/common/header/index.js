import React from 'react';
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
  Addition,
  Button
} from './style';

const Header = (props) => (
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
          in={props.focused}
          classNames="slide"
        >
          <NavSearch
            className={props.focused ? 'focused' : ''}
            onFocus={props.handleInputFocus}
            onBlur={props.handleInputBlur}
          ></NavSearch>
        </CSSTransition>
        <i className={props.focused ? 'focused iconfont' : 'iconfont'}>
          &#xe639;
        </i>
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
);

const mapStateToProps = (state) => ({
  focused: state.header.focused
});

const mapDispatchToProps = (dispatch) => ({
  handleInputFocus () {
    dispatch(actionCreators.headerSearchFocusAction());
  },
  handleInputBlur () {
    dispatch(actionCreators.headerSearchBlurAction());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);