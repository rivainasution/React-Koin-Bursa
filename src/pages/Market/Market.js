import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import axios from "axios";
import { DetailMarket, Title } from './Pages';
import { NumberBehindComma, PriceFormat, RatesFormat } from './Logic';

export default function Market({currencySymbol, rates, symbol}){
    const [market, setMarket] = useState([]);
    const [filter, setFilter] = useState('');
    const [pages, setPages] = useState('Markets');

    useEffect(() => {
        axios.get("https://api.coincap.io/v2/markets?limit=2000")
            .then((response) => {
                const dataWithNo = response.data.data.map((item, index) => ({ ...item, no: index + 1 }));
                setMarket(dataWithNo);
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
            name: 'Exchange',
            selector: row => row.exchangeId,
            sortable: true,
        },
        {
            name: 'Pairs',
            selector: row => `${row.baseSymbol} / ${row.quoteSymbol}`,
            sortable: true,
        },
        {
            name: 'Price Usd',
            selector: row => RatesFormat(NumberBehindComma(row.priceUsd,3), symbol, rates, currencySymbol),
            sortable: true,
        },
        {
            name: 'Percent Exhange Volume',
            selector: row => PriceFormat(NumberBehindComma(row.percentExchangeVolume,2)),
            sortable: true,
        },
        {
            name: 'Volume Usd 24 Hr',
            selector: row => RatesFormat(NumberBehindComma(row.volumeUsd24Hr, 3), symbol, rates, currencySymbol),
            sortable: true,
        },
        {
            name: 'Trade 24 Hr',
            selector: row => RatesFormat(NumberBehindComma(row.tradesCount24Hr, 3), symbol, rates, currencySymbol),
            sortable: true,
        }
    ];
    
    return (
        <Container className='my-3 bg-white p-3 border'>
            <Title 
                title={pages}
                route={setPages}
            />
            <DetailMarket
                    columns={columns}
                    market={market}
                    filter={filter}
                    setFilter={setFilter}
                />
        </Container>
    );
}
