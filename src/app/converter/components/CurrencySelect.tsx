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
    <div className="flex flex-col gap-2">
      <label htmlFor="currency" className="text-start text-sm">
        {labelText}
      </label>
      <select
        className="w-1/2 border rounded p-2 border-zinc-900 hover:cursor-pointer"
        id="currency"
        onChange={(e) => onChange(e.target.value)}
      >
        {currencies.map((currency, idx) => (
          <option key={idx} value={currency.code}>
            {currency.code}
          </option>
        ))}
      </select>
    </div>
  );
}
