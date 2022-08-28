import { IHistory } from "../types/converter";
import React from "react";

export const LocalStorageHistory = {
  setHistory(data: IHistory[]) {
    if (data.length > 0) {
      return localStorage.setItem("storedUsers", JSON.stringify(data));
    }
  },
  getHistory(setData: React.Dispatch<React.SetStateAction<IHistory[]>>) {
    if (localStorage.getItem("storedUsers")) {
      return setData(JSON.parse(localStorage.getItem("storedUsers") as string));
    }
  },
  removeHistory() {
    return localStorage.removeItem("storedUsers");
  },
};
