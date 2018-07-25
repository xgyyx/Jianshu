import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
  href: '/'
})`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  padding-right: 70px;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;

export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  
  .zoom {
    position: absolute;
    right: 4px;
    bottom: 4px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 15px;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  margin: 9px 0 0 20px;
  box-sizing: border-box;
  padding: 0 35px 0 25px;
  border-radius: 19px;
  border: none;
  outline: none;
  background: #eee;
  font-size: 14px;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    transition: width .2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: width .2s ease-in;
  }
  &.slide-exit-active {
    width: 160px;
  }
`;

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
`;

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 25px;
  font-size: 14px;
  color: #969696;
  vertical-align: center;
`;

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  vertical-align: center;
  cursor: pointer;

  .spin {
    margin-right: 2px;
    display: block;
    float: left;
    transition: all .2s ease-in;
    transform-origin: center center;
  }
`;

export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  padding: 0 5px;
  margin: 0 10px 15px 0;
  font-size: 12px;
  line-height: 20px;
  border: 1px solid #ddd;
  color: #969696;
  border-radius: 3px;
`;

export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 56px;
`;

export const Button = styled.div`
  float: right;
  margin: 9px 20px 0 0;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.article {
    background: #ec6149;
    color: #fff;
  }
`;