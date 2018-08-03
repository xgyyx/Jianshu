import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Topic from './components/topic';
import ContentList from './components/contentList';
import Recommend from './components/recommend';
import Writers from './components/writers';
import {
  HomeWrapper,
  HomeLeftPart,
  HomeRightPart,
  BackTop
} from './style';
import { actionCreators } from './store';

class Home extends PureComponent {
  render () {
    return (
      <HomeWrapper>
        <HomeLeftPart>
          <img
            src="https://upload.jianshu.io/admin_banners/web_images/4353/ee6b0e57da4752ae7760f72e496cbc2afe8c40d9.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            alt=""
            className='banner-img'
          />
          <Topic></Topic>
          <ContentList></ContentList>
        </HomeLeftPart>
        <HomeRightPart>
          <Recommend></Recommend>
          <Writers></Writers>
        </HomeRightPart>
        {
          this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>返回顶部</BackTop> : null
        }
        
      </HomeWrapper>
    )
  }
  
  componentDidMount () {
    this.bindScrollTopEvent();
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.props.changeScrollTopShow);
  }

  bindScrollTopEvent () {
    window.addEventListener('scroll', this.props.changeScrollTopShow);
  }

  handleScrollTop () {
    window.scrollTo(0, 0);
  };
}

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
});

const mapDispatch = (dispatch) => ({
  changeScrollTopShow () {
    console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop > 250) {
      dispatch(actionCreators.toggleShowTopChangeAction(true));
    } else {
      dispatch(actionCreators.toggleShowTopChangeAction(false));
    }
  }
});

export default connect(mapState, mapDispatch)(Home);