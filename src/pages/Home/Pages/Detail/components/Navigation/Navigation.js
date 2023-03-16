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
export default function SubNavbar ({name, color, title}){
    const [menu, setMenu] = useState('Overview');
    const [history, setHistory] = useState([]);
    const [market, setMarket] = useState([]);
    const [records, setRecords] = useState(market);
    const [dataHistory, setDataHistory] = useState(history);
    //TODO: FETCH API

    useEffect(() => {
        axios.get(`https://api.coincap.io/v2/assets/${name}/history?interval=d1`)
          .then((response) => {
            setHistory(response.data.data);
          })
          .catch((error) => {
            console.log(error);
          });
    }, []);

    useEffect(() => {
        axios.get(`https://api.coincap.io/v2/assets/${name}/markets`)
          .then((response) => {
            setMarket(response.data.data);
          })
          .catch((error) => {
            console.log(error);
          });
    }, []);

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
            selector: row => row.pairs,
            sortable: true,
        },
        {
            name: 'Price',
            selector: row => row.priceUsd,
            sortable: true,
        },
        {
            name: 'Volume 24Hr',
            selector: row => row.volumeUsd24Hr,
            sortable: true,
        },
        {
            name: 'Volume %',
            selector: row => row.volumePercent,
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
        const mappedRecords = market.map((trx,no) => {
          return {
                no: no+1,
                exchangeId: trx.exchangeId,
                pairs: PairsFormat(trx.baseSymbol, trx.quoteSymbol),
                priceUsd: NumberBehindComma(trx.priceUsd,8),
                volumeUsd24Hr: NumberBehindComma(trx.volumeUsd24Hr,2),
                volumePercent: NumberBehindComma(trx.volumePercent, 2),
          };
        });
        setRecords(mappedRecords); 
      }, [market]);

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
                    data={history} 
                    color={color} 
                />
            );
        } else if (menu === 'Market'){
            return (
                <Market 
                    title={title} 
                    columns={columns} 
                    records={records}
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
        <div class="my-3 row">
            <h1>{menu}</h1>
            <Headers onClick={setMenu} />
            {content()}
        </div>
    );
}