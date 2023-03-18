//TODO: Import libraries or directories
import { 
    faChartColumn, 
    faChartLine, 
    faChartPie, 
    faChartSimple 
} from "@fortawesome/free-solid-svg-icons";
import { 
    FontAwesomeIcon 
} from "@fortawesome/react-fontawesome";
import { 
    Col, 
    ProgressBar, 
    Row 
} from "react-bootstrap";
import { NumberBehindComma, RatesFormat } from "../../../../Logic";

const total = 819821192108;

//TODO: Start Function
export default function Cards ({data, currencySymbol, rates, symbol}){
    const cards = [
        {
            id: 0,
            menu: 'Market Cap'
        },
        {
            id: 1,
            menu: 'Dominance'
        },
        {
            id: 2,
            menu: 'Supply'
        },
        {
            id: 3,
            menu: 'Volume 24H'
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
                                <h6 className="text-secondary">{cardNumber(item.menu)} {cardSymbol(item.menu)}</h6>
                                {cardProgress(item.menu)}
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
        if (item === 'Market Cap'){
            return RatesFormat(NumberBehindComma(data.marketCapUsd,0), symbol, rates, currencySymbol);
        } else if (item === 'Dominance'){
            return NumberBehindComma(((data.marketCapUsd/total)*100),2);
        } else if (item === 'Supply'){
            return NumberBehindComma(data.supply,0);
        } else if (item === 'Volume 24H'){
            return RatesFormat(NumberBehindComma(data.volumeUsd24Hr,0), symbol, rates, currencySymbol);
        }
    }
    //TODO: Function to config cards symbol
    const cardSymbol = (item) => {
        if (item === 'Market Cap'){
            return "";
        } else if (item === 'Dominance'){
            return "%";
        } else if (item === 'Supply'){
            return data.symbol;
        } else if (item === 'Volume 24H'){
            return "";
        }
    }
    //TODO: Function to config cards icon
    const cardIcon = (item) => {
        if (item === 'Market Cap'){
            return <FontAwesomeIcon icon={faChartColumn} size='3x' />;
        } else if (item === 'Dominance'){
            return <FontAwesomeIcon icon={faChartPie} size='3x' />;
        } else if (item === 'Supply'){
            return <FontAwesomeIcon icon={faChartLine} size='3x' />;
        } else if (item === 'Volume 24H'){
            return <FontAwesomeIcon icon={faChartSimple} size='3x' />;
        }
    }
    //TODO: Function to config progress cards
    const cardProgress = (item) => {
        if (item === 'Market Cap'){
            return <ProgressBar variant="dark" animated max={total} now={data.marketCapUsd}/>
        } else if (item === 'Dominance'){
            return <ProgressBar variant="dark" animated max='100' now={(data.marketCapUsd/total)*100}/>
        } else if (item === 'Supply'){
            if (data.maxSupply < 1){
                return <ProgressBar variant="dark" animated max='100' now='100'/>
            } else {
                return <ProgressBar variant="dark" animated max={data.maxSupply} now={data.supply}/>
            }
        } else if (item === 'Volume 24H'){
            return <ProgressBar variant="dark" animated max={data.marketCapUsd} now={data.volumeUsd24Hr}/>;
        }
    }

    return (
        //TODO: Show Cards
        <Row className="my-3">
            {cardHandle()}
        </Row>
    );
}