import React, {Component} from 'react';
import {connect} from 'react-redux';
import Topic from './components/topic';
import ContentList from './components/contentList';
import Recommend from './components/recommend';
import Writers from './components/writers';
import {
  HomeWrapper,
  HomeLeftPart,
  HomeRightPart
} from './style';

class Home extends Component {
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
      </HomeWrapper>
    )
  }

  componentDidMount () {};
}

const mapDispatch = (dispatch) => ({});

export default connect(null, mapDispatch)(Home);