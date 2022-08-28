import styled from "styled-components";
import { Button, Input, Select, Spin } from "antd";

export const Wrapper = styled.div`
  display: flex;
  @media (max-width: 710px) {
    flex-direction: column;
    margin-top: 50px;
  }
  margin-top: 15px;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  @media (max-width: 710px) {
    align-items: center;
  }
`;

export const Title = styled.p`
  margin-bottom: 2px;
  font-size: 14px;
`;

export const Error = styled.div`
  color: red;
`;

export const ButtonSubmit = styled(Button)`
  margin-left: 20px;
  margin-top: 23px;
  @media (max-width: 710px) {
    width: 200px;
    margin-left: 0;
  }
`;

export const SummaryBox = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export const Spinner = styled(Spin)`
  display: flex;
  justify-content: center;
`;

export const InputAmount = styled(Input)`
  width: 100%;
  height: 40px;
  @media (max-width: 710px) {
    max-width: 200px;
  }
`;

export const SelectCurrency = styled(Select)`
  width: 200px;
`;
