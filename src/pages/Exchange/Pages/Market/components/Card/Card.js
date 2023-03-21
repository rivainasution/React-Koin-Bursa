//TODO: Import libraries or directories
import { 
    faChartColumn, 
    faChartLine, 
    faChartPie, 
    faChartSimple, 
    faShop
} from "@fortawesome/free-solid-svg-icons";
import { 
    FontAwesomeIcon 
} from "@fortawesome/react-fontawesome";
import { 
    Col, 
    ProgressBar, 
    Row 
} from "react-bootstrap";
import { NumberBehindComma, PriceFormat, RatesFormat } from "../../../../Logic";

const total = 819821192108;

//TODO: Start Function
export default function Cards ({data, currencySymbol, rates, symbol, url}){
    const cards = [
        {
            id: 0,
            menu: 'Daily Volume'
        },
        {
            id: 1,
            menu: 'Daily Percent Volume'
        },
        {
            id: 2,
            menu: 'Trading Pairs'
        },
        {
            id: 3,
            menu: 'Web'
        }
    ];

    //TODO: Function to looping cards
    const cardHandle = () => {
        return cards.map((item) => {
            return (
                <Col className="my-2" key={item.id}>
                    <div className="shadow p-3 bg-light text-dark rounded cards">
                        <div className="d-flex flex-column flex-lg-row align-items-center">
                            <Col md={8} className='my-2'>
                                <h4>{item.menu}</h4>
                                <h6 className="text-secondary">{cardNumber(item.menu)}</h6>
                            </Col>
                            <div className="col-4 d-flex align-items-center justify-content-end">
                                {cardIcon(item.menu)}
                            </div>
                        </div>
                    </div>
                </Col>
            );
        }) 
    }
    //TODO: Function to config cards number
    const cardNumber = (item) => {
        if (item === 'Daily Volume'){
            return RatesFormat(NumberBehindComma(data.volumeUsd,3), symbol, rates, currencySymbol);
        } else if (item === 'Daily Percent Volume'){
            return PriceFormat(NumberBehindComma(data.percentTotalVolume,2), symbol, rates, currencySymbol);
        } else if (item === 'Trading Pairs'){
            return data.tradingPairs;
        } else if (item === 'Web'){
            return <a href={url} className='t-pointer' target='_blank' rel='noopener noreferrer'>{url}</a>;
        }
    }

    //TODO: Function to config cards icon
    const cardIcon = (item) => {
        if (item === 'Daily Volume'){
            return <FontAwesomeIcon icon={faChartColumn} size='3x' />;
        } else if (item === 'Daily Percent Volume'){
            return <FontAwesomeIcon icon={faChartPie} size='3x' />;
        } else if (item === 'Trading Pairs'){
            return <FontAwesomeIcon icon={faChartSimple} size='3x' />;
        } else if (item === 'Web'){
            return <FontAwesomeIcon icon={faShop} size='3x' />;
        }
    }

    return (
        //TODO: Show Cards
        <Row className="my-3">
            {cardHandle()}
        </Row>
    );
}