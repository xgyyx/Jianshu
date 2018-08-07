import styled from "styled-components";

export const LoginWrapper = styled.div`
  z-index: 0;
  position: absolute;
  top: 56px;
  left: 0;
  right: 0;
  bottom: 0;
  background: #eee;
`;

export const LoginBox = styled.div`
  overflow: hidden;
  width: 25%;
  height: 200px;
  padding-top: 20px;
  margin: 80px auto;
  background: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, .1);
  border-radius: 3px;
`;

export const Input = styled.input`
  display: block;
  box-sizing: border-box;
  width: 50%;
  height: 30px;
  line-height: 30px;
  margin: 10px auto;
  color: #777;
`;

export const Button = styled.div`
  margin: 20px auto;
  width: 50%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background: orange;
  color: #fff;
  border-radius: 3px;
`;