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
  background: orange;
  overflow: hidden;
`;

export const TopicItem = styled.div`
  float: left;
  background: red;
`;