//TODO: Import libraries or dicrectories
import axios from "axios";
import { useEffect, useState } from "react";
import { 
    DateHandle, 
    NumberBehindComma, 
    PairsFormat, 
    TimeHandle 
} from "../../../../Logic";
import { History, Market, Overview } from "../../pages";
import { Headers } from "./components";

//TODO: Start function
export default function SubNavbar ({name, data, title}){
    const [menu, setMenu] = useState('Overview');
    const [history, setHistory] = useState([]);
    const [market, setMarket] = useState([]);
    const [dataHistory, setDataHistory] = useState(history);
    const [interval, setInterval] = useState('m1');
    const [filter, setFilter] = useState([]);

    //TODO: FETCH API

    useEffect(() => {
        axios.get(`https://api.coincap.io/v2/assets/${name}/history?interval=${interval}`)
          .then((response) => {
            setHistory(response.data.data);
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
            selector: row => row.exchangeId,
            sortable: true,
        },
        {
            name: 'Pairs',
            selector: row => PairsFormat(row.baseSymbol, row.quoteSymbol),
            sortable: true,
        },
        {
            name: 'Price',
            selector: row => NumberBehindComma(row.priceUsd,8),
            sortable: true,
        },
        {
            name: 'Volume 24Hr',
            selector: row => NumberBehindComma(row.volumeUsd24Hr,2),
            sortable: true,
        },
        {
            name: 'Volume %',
            selector: row => NumberBehindComma(row.volumePercent, 2),
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
            selector: row => row.priceUsd,
            sortable: true,
        },
        {
            name: 'Time',
            selector: row => row.time,
            sortable: true,
        },
        {
            name: 'Date',
            selector: row => row.date,
            sortable: true,
        }
    ];

    useEffect(() => {
        const mappedRecords = history.map((trx,no) => {
          return {
                no: no+1,
                priceUsd: NumberBehindComma(trx.priceUsd, 8),
                time: TimeHandle(trx.time),
                date: DateHandle(trx.date),
          };
        });
        setDataHistory(mappedRecords); 
    }, [history]);

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
                    records={dataHistory} 
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