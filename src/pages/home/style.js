import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
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
    margin-bottom: 35px;
  }
`;

export const HomeRightPart = styled.div`
  width: 280px;
  float: right;
  padding-top: 30px;
  background: orange;
`;

export const TopicWrapper = styled.div`
  overflow: hidden;
  margin-left: -18px;
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
    border-radius: 4px 0 0 4px;
  }
`;