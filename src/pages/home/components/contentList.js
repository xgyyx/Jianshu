import React, {PureComponent} from 'react';
import {ListWrapper, ListItem, ListInfo, LoadMore} from '../style';
import {connect} from 'react-redux';
import {actionCreators} from '../store';
import {Link} from 'react-router-dom';

class ContentList extends PureComponent {
  render () {
    const {list, getMorelist} = this.props;

    return (
      <ListWrapper>
        {
          list.map((item, index) => (
            <Link key={index} to={'/detail/' + item.get('id')}>
              <ListItem>
                <img className="list-pic" src={item.get('imgUrl')} alt="" />
                <ListInfo>
                  <h3 className="title">{item.get('title')}</h3>
                  <p className="desc">{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            </Link>
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