import NumberBehindComma from "../NumberFormat/BehindComma";

export default function Supply(number, total) {
  if (total > 1) {
    const percentage = (number / total) * 100;
    return <span>{NumberBehindComma(percentage, 2)}%</span>;
  }
  return <span>{NumberBehindComma(number)}</span>;
}
