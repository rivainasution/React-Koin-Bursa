import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import axios from "axios";
import { DetailMarket, Markets, Title } from './Pages';
import { NameFormat, NumberBehindComma, PriceFormat, RatesFormat } from './Logic';

export default function Exchange({currencySymbol, rates, symbol}){
    const [exchange, setExchange] = useState([]);
    const [filter, setFilter] = useState('');
    const [pages, setPages] = useState('Exchange');
    const [pageId, setPageId ] = useState('');
    const [url, setUrl] = useState('');

    useEffect(() => {
        axios.get("https://api.coincap.io/v2/exchanges")
            .then((response) => {
                const dataWithNo = response.data.data.map((item, index) => ({ ...item, no: index + 1 }));
                setExchange(dataWithNo);
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
            selector: row => NameFormat(row.name, row.exchangeId, row.exchangeUrl, setPageId, setPages, setUrl),
            sortable: true,
        },
        {
            name: 'Percent Total Volume',
            selector: row => PriceFormat(NumberBehindComma(row.percentTotalVolume,3), symbol, rates, currencySymbol),
            sortable: true,
        },
        {
            name: 'Volume Usd',
            selector: row => RatesFormat(NumberBehindComma(row.volumeUsd,3), symbol, rates, currencySymbol),
            sortable: true,
        },
        {
            name: 'Trading Pairs',
            selector: row => row.tradingPairs,
            sortable: true,
        },
        {
            name: 'Updated',
            selector: row => row.updated,
            sortable: true,
        }
    ];

    const content = () => {
        if (pages === 'Exchange'){
            return (
                <DetailMarket
                    columns={columns}
                    exchange={exchange}
                    filter={filter}
                    setFilter={setFilter}
                />
            ) 
        } else if (pages === 'Market'){
            return (
                <Markets 
                    currencySymbol={currencySymbol} 
                    rates={rates} 
                    symbol={symbol}
                    pageId={pageId}
                    url={url}
                />
            )
        }
    }
    
    return (
        <Container className='my-3 bg-white p-3 border'>
            <Title 
                title={pages}
                route={setPages}
                pageId={pageId}
            />
            {content()}
        </Container>
    );
}
