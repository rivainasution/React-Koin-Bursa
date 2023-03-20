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
    const [detailTitle, setDetailTitle] = useState('');
    const [filter, setFilter] = useState([]);

    useEffect(() => {
        axios.get("https://api.coincap.io/v2/assets?limit=2000")
            .then((response) => {
                const dataWithNo = response.data.data.map((item, index) => ({ ...item, no: index + 1 }));
                setAssets(dataWithNo);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [filter]);

    const columns = [
        {
            name: 'No',
            selector: row => row.no,
            sortable: true,
        },
        {
            name: 'Name',
            selector: row => NameFormat(row.name, row.id, setName, setPages),
            sortable: true,
        },
        {
            name: 'Symbol',
            selector: row => NameFormat(row.symbol, row.id, setName, setPages),
            sortable: true,
        },
        {
            name: 'Price Usd',
            selector: row => RatesFormat(NumberBehindComma(row.priceUsd,3), symbol, rates, currencySymbol),
            sortable: true,
        },
        {
            name: 'Change Percent 24 Hr',
            selector: row => PriceFormat(NumberBehindComma(row.changePercent24Hr,2)),
            sortable: true,
        },
        {
            name: 'Market Cap Usd',
            selector: row => RatesFormat(NumberBehindComma(row.marketCapUsd, 3), symbol, rates, currencySymbol),
            sortable: true,
        },
        {
            name: 'Volume Usd 24 Hr',
            selector: row => RatesFormat(NumberBehindComma(row.volumeUsd24Hr, 3), symbol, rates, currencySymbol),
            sortable: true,
        },
        {
            name: 'Price Average 24 Hr',
            selector: row => RatesFormat(NumberBehindComma(row.vwap24Hr, 3), symbol, rates, currencySymbol),
            sortable: true,
        },
        {
            name: 'Supply',
            selector: row => Supply(row.supply, row.maxSupply),
            sortable: true,
        },
        {
            name: 'Max Supply',
            selector: row => MaxSupply(NumberBehindComma(row.maxSupply)),
            sortable: true,
        },
    ];
    
    function content(){
        if (pages === 'Dashboard'){
            return (
                <Dashboard 
                    columns={columns}
                    assets={assets}
                    filter={filter}
                    setFilter={setFilter}
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
