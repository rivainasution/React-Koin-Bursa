//TODO: Import libraries or directories
import { 
    Badge 
} from "react-bootstrap";
import { IsPriceDown, NumberBehindComma, RatesFormat } from "../../../../Logic";

//TODO: Start Function
export default function Price ({data, currencySymbol, rates, symbol}){
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
                    {RatesFormat(NumberBehindComma(data.priceUsd, 3), symbol, rates, currencySymbol)} {IsPriceDown(data.changePercent24Hr)}
                </h2>
            </div>
        </div>
    );
}