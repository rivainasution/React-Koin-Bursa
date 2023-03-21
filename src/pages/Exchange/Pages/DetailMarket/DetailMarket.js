import { Container } from "react-bootstrap";
import DataTable from 'react-data-table-component';

export default function DetailMarket({columns, exchange, filter, setFilter}){
    function handleFilter(event){
        const newData = exchange.filter(item=>{
            const {name} = item;

            return (
                name.toLowerCase().includes(event.target.value.toLowerCase())
            );
        })
        setFilter(newData);
    }
    return (
        <Container>
            <div  className='d-flex justify-content-between my-2'>
                <span className='fw-bold'>Top 100 Exchange List</span>
                <input type='text' onChange={handleFilter}/>
            </div>
            <DataTable
                columns={columns}
                data={filter.length === 0? exchange: filter}
                fixedHeader
                fixedHeaderScrollHeight='420px'
                pagination
            />
        </Container>
    );
}