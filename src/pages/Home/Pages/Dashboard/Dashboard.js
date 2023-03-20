import { Container } from "react-bootstrap";
import DataTable from 'react-data-table-component';

export default function Dashboard({columns, assets, filter, setFilter}){
    function handleFilter(event){
        const newData = assets.filter(asset=>{
            const { name, symbol} = asset;

            return (
                name.toLowerCase().includes(event.target.value.toLowerCase()) ||
                symbol.toLowerCase().includes(event.target.value.toLowerCase()) 
            );
        })
        setFilter(newData);
    }
    return (
        <Container>
            <div  className='d-flex justify-content-between my-2'>
                <span className='fw-bold'>Top 100 Coin List</span>
                <input type='text' onChange={handleFilter}/>
            </div>
            <DataTable
                columns={columns}
                data={filter.length === 0? assets: filter}
                fixedHeader
                fixedHeaderScrollHeight='420px'
                pagination
            />
        </Container>
    );
}