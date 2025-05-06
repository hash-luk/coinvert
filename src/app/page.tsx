"use client";
import { useState, useEffect } from "react";
import Form from "next/form";

type Currency = {
  code: string;
};

export default function Home() {
  const [currencys, setCurrencys] = useState<Currency[]>([]);

  useEffect(() => {
    const fetchCurrencys = async () => {
      const res = await fetch(
        "https://openexchangerates.org/api/currencies.json"
      );
      const data = await res.json();
      const formatted = Object.entries(data).map(([code]) => ({
        code,
      }));

      setCurrencys(formatted);
    };

    fetchCurrencys();
  }, []);

  return (
    <Form action="/convert">
      <input name="from" />
      <input name="to" />
      <button type="submit">Converter</button>
    </Form>
  );
}
