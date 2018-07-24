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
            {this.getListArea()}
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

  getListArea () {
    const {focused, list, page, totalPage, mouseEnter, handleMouseEnter, handleMouseLeave, handlePageChange} = this.props;
    const listToJS = list.toJS();
    const pageList = [];
    if (listToJS.length) {
      for (let i = page * 10; i < (page + 1) * 10; i++) {
        if (listToJS[i]) {
          pageList.push(<SearchInfoItem key={listToJS[i]}>{listToJS[i]}</SearchInfoItem>);
        }
      }
    }

    if (!focused && !mouseEnter) {
      return null;
    }
    return (
      <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <SearchInfoTitle>
          热门搜索
          <SearchInfoSwitch onClick={() => handlePageChange(page, totalPage)}>换一批</SearchInfoSwitch>
        </SearchInfoTitle>
        <div>
          {pageList}
        </div>
      </SearchInfo>
    );
  }
}

const mapStateToProps = (state) => ({
  // focused: state.get('header').get('focused')
  focused: state.getIn(['header', 'focused']),
  list: state.getIn(['header', 'list']),
  page: state.getIn(['header', 'page']),
  mouseEnter: state.getIn(['header', 'mouseEnter']),
  totalPage: state.getIn(['header', 'totalPage'])
});

const mapDispatchToProps = (dispatch) => ({
  handleInputFocus () {
    dispatch(actionCreators.getList());
    dispatch(actionCreators.headerSearchFocusAction());
  },
  handleInputBlur () {
    dispatch(actionCreators.headerSearchBlurAction());
  },
  handleMouseEnter () {
    dispatch(actionCreators.mouseEnterAction());
  },
  handleMouseLeave () {
    dispatch(actionCreators.MouseLeaveAction());
  },
  handlePageChange (page, totalPage) {
    const calculatePage = (page + 1) < totalPage ? page + 1 : 1;
    dispatch(actionCreators.changePageAction(calculatePage));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);