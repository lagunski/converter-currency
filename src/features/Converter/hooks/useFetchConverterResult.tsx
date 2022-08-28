import { converterApi } from "../../../api/converter-api";
import { toast } from "react-toastify";
import { useQuery } from "react-query";
import { useContext, useState } from "react";
import { Context } from "../../../App";

export const useFetchConverterResult = () => {
  const [historyData, setHistoryData] = useContext(Context);
  const [amountToConvert, setAmountToConvert] = useState(0);
  const [currencyFrom, setCurrencyFrom] = useState("");
  const [currencyTo, setCurrencyTo] = useState("");
  const fetchConverterResult = async () => {
    try {
      const response = await converterApi.getResult(
        currencyTo,
        currencyFrom,
        amountToConvert
      );
      setHistoryData([
        {
          result: response.result,
          from: response.query.from,
          amount: response.query.amount,
          to: response.query.to,
          date: response.info.timestamp,
        },
        ...historyData,
      ]);
      return response.result;
    } catch (e: any) {
      toast.warn(e.message);
    }
  };

  const {
    data,
    refetch: refetchConverter,
    isLoading: isLoadingConverter,
  } = useQuery(["data"], fetchConverterResult, {
    enabled: false,
  });
  return {
    refetchConverter,
    isLoadingConverter,
    currencyFrom,
    setCurrencyFrom,
    currencyTo,
    setCurrencyTo,
    data,
    setAmountToConvert,
  };
};
