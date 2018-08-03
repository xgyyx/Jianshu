import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`;

export const BackTop = styled.div`
  position: fixed;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  right: 100px;
  bottom: 100px;
  font-size: 14px;
  cursor: pointer;
`;

export const HomeLeftPart = styled.div`
  float: left;
  width: 625px;
  padding-top: 30px;
  .banner-img {
    width: 625px;
    height: 270px;
    border-radius: 6px;
    font-size: 0;
  }
`;

export const HomeRightPart = styled.div`
  width: 280px;
  float: right;
  margin-top: 30px;
  background: orange;
`;

export const TopicWrapper = styled.div`
  overflow: hidden;
  margin-top: 35px;
  margin-left: -18px;
  margin-right: -18px;
`;

export const TopicItem = styled.div`
  float: left;
  background: #f7f7f7;
  line-height: 32px;
  height: 32px;
  font-size: 14px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding-right: 10px;
  margin: 0 18px 10px 18px;
  .topic-pic {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
    border-radius: 3px 0 0 3px;
  }
`;

export const ListWrapper = styled.div`
  margin-top: 35px;
  border-top: 1px solid #dcdcdc;
`;

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .list-pic {
    display: block;
    float: right;
    width: 125px;
    height: 100px;
    border-radius: 5px;
  }
`;

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-bottom: 5px;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`;

export const RecommendWrapper = styled.div`
  width: 280px;
  background: #fff;
  padding-bottom: 10px;
`;

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
  margin-bottom: 5px;
`;

export const LoadMore = styled.div`
  margin: 30px 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: #a5a5a5;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`;