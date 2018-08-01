import React, {Component} from 'react';
import {ListWrapper, ListItem, ListInfo, LoadMore} from '../style';
import {connect} from 'react-redux';
import {actionCreators} from '../store';

class ContentList extends Component {
  render () {
    const {list, getMorelist} = this.props;

    return (
      <ListWrapper>
        {
          list.map((item, index) => (
            <ListItem key={index}>
              <a href="">
                <img className="list-pic" src={item.get('imgUrl')} alt="" />
              </a>
              <ListInfo>
                <h3 className="title">{item.get('title')}</h3>
                <p className="desc">{item.get('desc')}</p>
              </ListInfo>
            </ListItem>
          ))
        }
        <LoadMore onClick={getMorelist}>阅读更多</LoadMore>
      </ListWrapper>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'contentList'])
});

const mapDispatch = (dispatch) => ({
  getMorelist () {
    dispatch(actionCreators.getMoreListAction());
  }
});

export default connect(mapState, mapDispatch)(ContentList);