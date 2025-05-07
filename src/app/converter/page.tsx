"use client";
import { useState, useEffect } from "react";
import Form from "next/form";
import { Currency } from "@/types/currency";
import CurrencySelect from "./components/CurrencySelect";

export default function Converter() {
  const [currencys, setCurrencys] = useState<Currency[]>([]);

  useEffect(() => {
    const fetchCurrencys = async () => {
      const res = await fetch(
        "https://openexchangerates.org/api/currencies.json"
      );
      const data: Record<string, string> = await res.json();
      const formatted = Object.entries(data).map(([code, description]) => ({
        code,
        description,
      }));

      setCurrencys(formatted);
    };

    fetchCurrencys();
  }, []);

  return (
    <div className="h-[100vh] flex items-center justify-center">
      <Form
        action="/convert"
        className="bg-white rounded w-full max-w-[800px] p-4 flex flex-col gap-2 content-center"
      >
        <div className="flex flex-col gap-4">
          <div>
            <CurrencySelect
              labelText="De:"
              currencies={currencys}
              onChange={(val) => console.log(val)}
            />
          </div>

          <CurrencySelect
            labelText="Para:"
            currencies={currencys}
            onChange={(val) => console.log(val)}
          />
        </div>
        <input name="money-value" />
        <button
          className="bg-blue-500 text-white p-2 rounded hover:cursor-pointer border-2 border-white hover:bg-white hover:text-blue-500 hover:border-blue-500 hover:border-2 transition-colors"
          type="submit"
        >
          Converter
        </button>
      </Form>
    </div>
  );
}
