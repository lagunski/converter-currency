import React, { ChangeEvent, useContext, useEffect } from "react";
import "antd/dist/antd.css";
import { Select } from "antd";
import { Context } from "../../App";
import { Controller, useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useFetchCurrencies } from "./hooks/useFetchCurrencies";
import { useFetchConverterResult } from "./hooks/useFetchConverterResult";
import * as S from "./Converter.styled";

export const Converter = () => {
  const { Option } = Select;

  const { refetch, isLoading, dataConverter } = useFetchCurrencies();
  const {
    refetchConverter,
    isLoadingConverter,
    setCurrencyFrom,
    setCurrencyTo,
    data,
    setAmountToConvert,
  } = useFetchConverterResult();

  const [historyData] = useContext(Context);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSearchCurrencyFrom = (value: string) => {
    setCurrencyFrom(value);
  };

  const onSearchCurrencyTo = (value: string) => {
    setCurrencyTo(value);
  };

  const onSubmit = () => {
    refetchConverter().then();
  };

  useEffect(() => {
    refetch().then();
  }, [refetch]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <S.Wrapper>
        <S.Container>
          <S.Title>Amount</S.Title>
          <Controller
            name="amount"
            control={control}
            rules={{
              required: "Amount is required",
              validate: (amount: number) => amount > 0,
            }}
            render={({ field }) => (
              <S.InputAmount
                placeholder="provide an amount"
                size="large"
                type="number"
                min={0}
                step="any"
                value={field.value}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  field.onChange(e.currentTarget.value);
                  setAmountToConvert(parseInt(e.currentTarget.value));
                }}
              />
            )}
          />
          {errors.amount && <S.Error>Amount is required</S.Error>}
        </S.Container>
        <S.Container>
          <S.Title>From</S.Title>
          <Controller
            control={control}
            name="currencyFrom"
            rules={{ required: "Currency is required" }}
            render={({ field }) => (
              <S.SelectCurrency
                size="large"
                loading={isLoading}
                value={field.value}
                showSearch
                placeholder="select a currency"
                optionFilterProp="children"
                // @ts-ignore
                onChange={(value: string) => {
                  field.onChange(value);
                  setCurrencyFrom(value);
                }}
                onSearch={onSearchCurrencyFrom}
                filterOption={(input, option) =>
                  // @ts-ignore
                  option.children.toLowerCase().includes(input.toLowerCase())
                }
              >
                {dataConverter.map((currency: string) => (
                  <Option key={currency} value={currency}>
                    {currency}
                  </Option>
                ))}
              </S.SelectCurrency>
            )}
          />
          {errors.currencyFrom && <S.Error>Currency is required</S.Error>}
        </S.Container>
        <S.Container>
          <S.Title>To</S.Title>
          <Controller
            control={control}
            name="currencyTo"
            rules={{ required: "Currency is required" }}
            render={({ field }) => (
              <S.SelectCurrency
                size="large"
                loading={isLoading}
                value={field.value}
                showSearch
                placeholder="select a currency"
                optionFilterProp="children"
                // @ts-ignore
                onChange={(value: string) => {
                  field.onChange(value);
                  setCurrencyTo(value);
                }}
                onSearch={onSearchCurrencyTo}
                filterOption={(input, option) =>
                  // @ts-ignore
                  option.children.toLowerCase().includes(input.toLowerCase())
                }
              >
                {dataConverter.map((currency: string) => (
                  <Option key={currency} value={currency}>
                    {currency}
                  </Option>
                ))}
              </S.SelectCurrency>
            )}
          />
          {errors.currencyTo && <S.Error>Currency is required</S.Error>}
        </S.Container>
        <S.Container>
          <S.ButtonSubmit
            htmlType="submit"
            size="large"
            type="primary"
            disabled={isLoading || isLoadingConverter}
          >
            Convert
          </S.ButtonSubmit>
        </S.Container>
      </S.Wrapper>
      <S.SummaryBox>
        {data &&
          `
            ${historyData[0].amount} ${historyData[0].from} = ${data.toFixed(
            2
          )} ${historyData[0].to}`}
      </S.SummaryBox>
      {(isLoading || isLoadingConverter) && (
        <S.Spinner size="large" className="d-flex justify-content-center" />
      )}
      <ToastContainer autoClose={5000} />
    </form>
  );
};
