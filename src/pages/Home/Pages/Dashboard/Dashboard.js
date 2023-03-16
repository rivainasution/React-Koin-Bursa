import { Container } from "react-bootstrap";
import DataTable from 'react-data-table-component';

export default function Dashboard({columns, records, assets, setRecords}){
    function handleFilter(event){
        const newData = assets.filter(assets=>{
            const { name, symbol} = assets;

            return (
                name.toLowerCase().includes(event.target.value.toLowerCase()) ||
                symbol.toLowerCase().includes(event.target.value.toLowerCase()) 
            );
        })
        setRecords(newData);
    }
    return (
        <Container>
            <div  className='d-flex justify-content-between my-2'>
                <span className='fw-bold'>Top 100 Coin List</span>
                <input type='text' onChange={handleFilter}/>
            </div>
            <DataTable
                columns={columns}
                data={records}
                fixedHeader
                fixedHeaderScrollHeight='420px'
                pagination
            />
        </Container>
    );
}