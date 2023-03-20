import { Container } from "react-bootstrap";
import DataTable from 'react-data-table-component';

export default function DetailMarket({columns, market, filter, setFilter, pageId}){
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
            <div className='d-flex justify-content-between my-2'>
                <span className='fw-bold'>Top 100 coin di exchange {pageId}</span>
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