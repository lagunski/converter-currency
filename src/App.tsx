import React, { createContext, useState } from "react";
import Header from "./components/Header/Header";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Converter } from "./features/Converter/Converter";
import { History } from "./features/History/History";
import { HistoryContext, IHistory } from "./types/converter";

export const Context = createContext<HistoryContext>([[], () => null]);

function App() {
  const [historyData, setHistoryData] = useState<IHistory[]>([]);
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        retry: false,
        staleTime: Infinity,
      },
    },
  });
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Context.Provider value={[historyData, setHistoryData]}>
          <Header />
          <Routes>
            <Route path="/" element={<Converter />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </Context.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
