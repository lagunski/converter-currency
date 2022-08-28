import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.apilayer.com/exchangerates_data/",
  // @ts-ignore
  headers: { apiKey: process.env.REACT_APP_API_KEY },
});

export const converterApi = {
  getResult(currencyTo: string, currencyFrom: string, value: number) {
    return instance
      .get(`convert?to=${currencyTo}&from=${currencyFrom}&amount=${value}`)
      .then((response) => {
        return response.data;
      });
  },
  getCurrencies() {
    return instance.get("symbols").then((response) => {
      return response.data;
    });
  },
};
