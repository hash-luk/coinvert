import { Currency } from "@/types/currency";

type Props = {
  currencies: Currency[];
  onChange: (code: string) => void;
  labelText: string;
};

export default function CurrencySelect({
  currencies,
  onChange,
  labelText,
}: Props) {
  return (
    <div>
      <label htmlFor="currency">{labelText}</label>
      <select id="currency" onChange={(e) => onChange(e.target.value)}>
        {currencies.map((currency, idx) => (
          <option key={idx} value={currency.code}>
            {currency.code}
          </option>
        ))}
      </select>
    </div>
  );
}
