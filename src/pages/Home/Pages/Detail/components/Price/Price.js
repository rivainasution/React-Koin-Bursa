//TODO: Import libraries or directories
import { 
    Badge 
} from "react-bootstrap";
import { NumberBehindComma } from "../../../../Logic";

//TODO: Start Function
export default function Price ({data, setColor}){
    //TODO: is price down
    const isPriceDown = (number) => {
        setColor(number);
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

    return (
        //TODO: Show rank and price
        <div className="d-flex align-items-start justify-content-between flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row mb-3">
            {/* TODO: Show Rank */}
            <div className="d-flex my-2">
                <Badge bg='secondary'>
                    #Rank {data.rank}
                </Badge>
                <Badge bg='light' className="mx-1">
                    <a href={data.explorer}>Explorers</a>
                </Badge>
            </div>
            {/* TODO: Show price */}
            <div className="d-flex flex-column align-items-lg-end align-items-md-end align-items-sm-end align-items-xl-end align-items-start">
                <h6 className="text-secondary">
                    {data.name} Price ({data.symbol})
                </h6>
                <h2>
                    {NumberBehindComma(data.priceUsd, 5)} USD {isPriceDown(data.changePercent24Hr)}
                </h2>
            </div>
        </div>
    );
}