//TODO: Import libraries or dicrectories
import axios from "axios";
import { useEffect, useState } from "react";
import { 
    DateHandle, 
    NumberBehindComma, 
    PairsFormat, 
    RatesFormat,
    PriceFormat,
    TimeHandle 
} from "../../../../Logic";
import { History, Market, Overview } from "../../pages";
import { Headers } from "./components";
import { NameFormat } from "./logic";

//TODO: Start function
export default function SubNavbar ({name, data, title, currencySymbol, rates, symbol, setPage, setPageId}){
    const [menu, setMenu] = useState('Overview');
    const [history, setHistory] = useState([]);
    const [market, setMarket] = useState([]);
    const [interval, setInterval] = useState('m1');
    const [filter, setFilter] = useState([]);

    //TODO: FETCH API

    useEffect(() => {
        axios.get(`https://api.coincap.io/v2/assets/${name}/history?interval=${interval}`)
          .then((response) => {
            const dataWithNo = response.data.data.map((item, index) => ({ ...item, no: index + 1 }));
            setHistory(dataWithNo);
          })
          .catch((error) => {
            console.log(error);
          });
    }, [name, interval]);


    useEffect(() => {
        axios.get(`https://api.coincap.io/v2/assets/${name}/markets?limit=2000`)
          .then((response) => {
            const dataWithNo = response.data.data.map((item, index) => ({ ...item, no: index + 1 }));
            setMarket(dataWithNo);
          })
          .catch((error) => {
            console.log(error);
          });
    }, [name, filter]);

    const columns = [
        {
            name: 'No',
            selector: row => row.no,
            sortable: true,
        },
        {
            name: 'Exchange',
            selector: row => NameFormat(row.exchangeId, setPageId, setPage),
            sortable: true,
        },
        {
            name: 'Pairs',
            selector: row => PairsFormat(row.baseSymbol, row.quoteSymbol),
            sortable: true,
        },
        {
            name: 'Price',
            selector: row => RatesFormat(NumberBehindComma(row.priceUsd,3), symbol, rates, currencySymbol),
            sortable: true,
        },
        {
            name: 'Volume 24Hr',
            selector: row => RatesFormat(NumberBehindComma(row.volumeUsd24Hr,2), symbol, rates, currencySymbol),
            sortable: true,
        },
        {
            name: 'Volume %',
            selector: row => PriceFormat(NumberBehindComma(row.volumePercent, 2)),
            sortable: true,
        }
    ];

    const columnHistory = [
        {
            name: 'No',
            selector: row => row.no,
            sortable: true,
        },
        {
            name: 'Price',
            selector: row => RatesFormat(NumberBehindComma(row.priceUsd,3), symbol, rates, currencySymbol),
            sortable: true,
        },
        {
            name: 'Time',
            selector: row => TimeHandle(row.time),
            sortable: true,
        },
        {
            name: 'Date',
            selector: row => DateHandle(row.date),
            sortable: true,
        }
    ];

    //TODO: Content selection
    const content = () => {
        if (menu === "Overview"){
            return (
                <Overview 
                    title={title} 
                    history={history} 
                    data={data}
                    setInterval={setInterval}
                    interval={interval}
                />
            );
        } else if (menu === 'Market'){
            return (
                <Market 
                    title={title} 
                    columns={columns} 
                    market={market}
                    filter={filter}
                    setFilter={setFilter}
                />
            );
        } else if (menu === 'History'){
            return (
                <History 
                    title={title} 
                    columns={columnHistory} 
                    records={history} 
                />
            );
        } 
    }

    return (
        //ToDO: Show detail navbar
        <div className="my-3 row">
            <h1>{menu}</h1>
            <Headers 
                navbar={menu}
                setNavbar={setMenu} 
            />
            {content()}
        </div>
    );
}
