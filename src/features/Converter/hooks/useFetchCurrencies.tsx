import { converterApi } from "../../../api/converter-api";
import { toast } from "react-toastify";
import { useQuery } from "react-query";
import { useState } from "react";

export const useFetchCurrencies = () => {
  const [dataConverter, setDataConverter] = useState<string[]>([]);
  const fetchCurrencies = async () => {
    try {
      const response = await converterApi.getCurrencies();
      const symbols = Object.keys(response.symbols);
      setDataConverter(symbols);
      return symbols;
    } catch (e: any) {
      toast.warn(e.message);
    }
  };
  const { isLoading, refetch } = useQuery(["etchCurrencies"], fetchCurrencies);
  return { isLoading, refetch, dataConverter };
};
