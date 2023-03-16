import { ProgressBar } from "react-bootstrap";
import NumberBehindComma from "../NumberFormat/BehindComma";

export default function Supply(number, total){
    if (total > 1){
        return  <span>{NumberBehindComma(number/total)*100}%</span>
    }
    return <span>{NumberBehindComma(number)}</span>
}