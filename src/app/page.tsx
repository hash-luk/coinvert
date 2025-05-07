"use client";
import { useState, useEffect } from "react";
import Form from "next/form";

type Currency = {
  code: string;
  description: string;
};

export default function Home() {
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
      <select name="from">
        {currencys.map((currency, idx) => (
          <option key={idx} value={currency.code}>
            {currency.code}
          </option>
        ))}
      </select>
      <select name="to">
        {currencys.map((currency, idx) => (
          <option key={idx} value={currency.code}>
            {currency.code}
          </option>
        ))}
      </select>
      <input name="money-value" />
      <button type="submit">Converter</button>
    </Form>
  );
}
