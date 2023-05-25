import React from "react";

export type IHistory = {
  from: string;
  to: string;
  result: number;
  amount: number;
  date: number;
};

export type HistoryContext = [
  IHistory[],
  React.Dispatch<React.SetStateAction<IHistory[]>>
];
