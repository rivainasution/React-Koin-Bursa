import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import DataTable from 'react-data-table-component';
import { Cards, Prices } from "../../components";

export default function DetailExchange({columns, market, filter, setFilter, pageId, currencySymbol, rates, symbol, url}){
    const [dataDetail, setDataDetail] = useState({});
    
    useEffect(() => {
        axios.get(`https://api.coincap.io/v2/exchanges/${pageId}`)
            .then((response) => {
                setDataDetail(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [filter, pageId]);
    
    function handleFilter(event){
        const newData = market.filter(item=>{
            const { exchangeId, baseSymbol, baseId, quoteSymbol, quoteId} = item;

            return (
                exchangeId.toLowerCase().includes(event.target.value.toLowerCase()) ||
                baseSymbol.toLowerCase().includes(event.target.value.toLowerCase()) ||
                baseId.toLowerCase().includes(event.target.value.toLowerCase()) ||
                quoteSymbol.toLowerCase().includes(event.target.value.toLowerCase()) ||
                quoteId.toLowerCase().includes(event.target.value.toLowerCase())
            );
        })
        setFilter(newData);
    }
    return (
        <Container>
            <Prices
                data={dataDetail} 
                url={url}
            />
            <Cards 
                data={dataDetail}
                currencySymbol={currencySymbol} 
                rates={rates} 
                symbol={symbol}
                url={url}
            />
            <div className='d-flex align-items-center justify-content-between mt-5 mb-2'>
                <span className='fw-bold p-2'>Market</span>
                <input type='text' onChange={handleFilter}/>
            </div>
            <DataTable
                columns={columns}
                data={filter.length === 0? market: filter}
                fixedHeader
                fixedHeaderScrollHeight='420px'
                pagination
            />
        </Container>
    );
}