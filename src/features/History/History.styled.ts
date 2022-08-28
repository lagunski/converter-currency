import styled from "styled-components";
import { Button } from "antd";

export const Container = styled.div`
  display: flex;
  justify-content: end;
  margin-right: 400px;
  @media (max-width: 912px) {
    margin-right: 10px;
  }
  @media (max-width: 1280px) {
    margin-right: 100px;
  }
`;

export const ButtonRemove = styled(Button)`
  width: 130px;
  margin-top: 15px;
  margin-bottom: 15px;
  @media (max-width: 912px) {
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;
export const TableContainer = styled.div`
  margin-right: 400px;
  margin-left: 400px;
  @media (max-width: 912px) {
    margin-right: 10px;
    margin-left: 10px;
  }
  @media (max-width: 1280px) {
    margin-right: 100px;
    margin-left: 100px;
  }
`;
