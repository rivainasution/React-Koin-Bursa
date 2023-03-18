import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import axios from "axios";
import { 
    MaxSupply,
    NameFormat,
    NumberBehindComma,
    PriceFormat, 
    RatesFormat, 
    Supply
} from './Logic';
import { Dashboard, DetailCoin, Title } from './Pages';


export default function Home({currencySymbol, rates, symbol}){
    const [assets, setAssets] = useState([]);
    const [pages, setPages] = useState('Dashboard')
    const [name, setName] = useState('');
    const [records, setRecords] = useState(assets);
    const [detailTitle, setDetailTitle] = useState('');

    useEffect(() => {
        axios.get("https://api.coincap.io/v2/assets?limit=2000")
          .then((response) => {
            setAssets(response.data.data);
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
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Symbol',
            selector: row => row.symbol,
            sortable: true,
        },
        {
            name: 'Price Usd',
            selector: row => row.priceusd,
            sortable: true,
        },
        {
            name: 'Change Percent 24 Hr',
            selector: row => row.changePercent24hr,
            sortable: true,
        },
        {
            name: 'Market Cap Usd',
            selector: row => row.marketCapUsd,
            sortable: true,
        },
        {
            name: 'Volume Usd 24 Hr',
            selector: row => row.volumeUsd24Hr,
            sortable: true,
        },
        {
            name: 'Price Average 24 Hr',
            selector: row => row.volume24Hr,
            sortable: true,
        },
        {
            name: 'Supply',
            selector: row => row.supply,
            sortable: true,
        },
        {
            name: 'Max Supply',
            selector: row => row.maxSupply,
            sortable: true,
        },
    ];
    
    
    useEffect(() => {
        const mappedRecords = assets.map((trx,no) => {
          return {
                no: no+1,
                name: NameFormat(trx.name, trx.id, setName, setPages),
                symbol: trx.symbol,
                priceusd: RatesFormat(NumberBehindComma(trx.priceUsd,3), symbol, rates, currencySymbol),
                changePercent24hr: PriceFormat(NumberBehindComma(trx.changePercent24Hr,2)),
                marketCapUsd: RatesFormat(NumberBehindComma(trx.marketCapUsd, 3), symbol, rates, currencySymbol),
                volumeUsd24Hr: RatesFormat(NumberBehindComma(trx.volumeUsd24Hr, 3), symbol, rates, currencySymbol),
                volume24Hr: RatesFormat(NumberBehindComma(trx.vwap24Hr, 3), symbol, rates, currencySymbol),
                supply: Supply(trx.supply, trx.maxSupply),
                maxSupply: MaxSupply(NumberBehindComma(trx.maxSupply)),
          };
        });
        setRecords(mappedRecords); 
      }, [assets, symbol, rates, currencySymbol]);
    
    function content(){
        if (pages === 'Dashboard'){
            return (
                <Dashboard 
                    columns={columns}
                    records={records}
                    assets={assets}
                    setRecords={setRecords}
                />
            )
        } else if (pages === 'Detail'){
            return (
                <DetailCoin 
                    name={name}
                    setName={setDetailTitle}
                    title={detailTitle}
                    currencySymbol={currencySymbol}
                    rates={rates} 
                    symbol={symbol}
                />
            )
        }
    }
    return (
        <Container className='my-3 bg-white p-3 border'>
            <Title 
                title={pages}
                name={detailTitle} 
                route={setPages}
            />
            {content()}
        </Container>
    );
}