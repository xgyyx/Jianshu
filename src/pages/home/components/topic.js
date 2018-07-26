import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TopicWrapper, TopicItem} from '../style';
import {actionCreators} from '../store';

class Topic extends Component {
  render () {
    const {list, getTopicList} = this.props;
    
    getTopicList(list);

    return (
      <TopicWrapper>
        {console.log(list)}
        {
          list.map((item) => (
            <TopicItem key={item.id}>
              <img
                className='topic-pic'
                src={item.get('imgUrl')}
                alt=""/>
              {item.get('title')}
            </TopicItem>
          ))
        }
      </TopicWrapper>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'topicList'])
});

const mapDispatch = (dispatch) => ({
  getTopicList (list) {
    (list.size === 0) && dispatch(actionCreators.getTopicListAction());
  }
});

export default connect(mapState, mapDispatch)(Topic);