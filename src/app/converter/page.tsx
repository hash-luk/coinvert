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
    <Form action="/convert">
      <CurrencySelect
        labelText="De:"
        currencies={currencys}
        onChange={(val) => console.log(val)}
      />
      <CurrencySelect
        labelText="Para:"
        currencies={currencys}
        onChange={(val) => console.log(val)}
      />
      <input name="money-value" />
      <button type="submit">Converter</button>
    </Form>
  );
}
