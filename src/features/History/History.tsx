import React, { useContext, useEffect } from "react";
import { Context } from "../../App";
import { convertedDate } from "../../utils/dateConverter";
import { Table } from "antd";
import { LocalStorageHistory } from "../../utils/localStorageHistory";
import * as S from "./History.styled";

export const History = () => {
  const [historyData, setHistoryData] = useContext(Context);

  useEffect(() => {
    LocalStorageHistory.setHistory(historyData);
    LocalStorageHistory.getHistory(setHistoryData);
  }, [setHistoryData, historyData]);

  const data = historyData.map((row, index) => ({
    key: index + 1,
    Id: index + 1,
    Amount: `${row.amount} ${row.from}  `,
    Result: `${row.result.toFixed(2)} ${row.to}`,
    Date: convertedDate(row.date),
  }));

  const columns = [
    {
      title: "Id",
      dataIndex: "Id",
      key: "id",
    },
    {
      title: "Amount",
      dataIndex: "Amount",
      key: "amount",
    },

    {
      title: "Result",
      dataIndex: "Result",
      key: "data",
    },

    {
      title: "Date",
      dataIndex: "Date",
      key: "date",
    },
  ];

  return (
    <>
      <S.Container>
        <S.ButtonRemove
          onClick={() => {
            setHistoryData([]);
            LocalStorageHistory.removeHistory();
          }}
          type="primary"
        >
          Remove history
        </S.ButtonRemove>
      </S.Container>
      <S.TableContainer>
        <Table dataSource={data} columns={columns} pagination={false} />
      </S.TableContainer>
    </>
  );
};
