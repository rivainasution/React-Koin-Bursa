import { Badge } from "react-bootstrap";
import NumberBehindComma from "../NumberFormat/BehindComma";

export default function isPriceDown (number) {
    if (number < 0) {
        return (
            <Badge bg='danger'>
                {NumberBehindComma(number,2)}
            </Badge>
        );
    } else {
        return (
            <Badge bg='success'>
                +{NumberBehindComma(number, 2)}
            </Badge>
        );
    }
}