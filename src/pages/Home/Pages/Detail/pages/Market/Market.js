//TODO: Import libraries or directories
import DataTable from 'react-data-table-component';
import { 
    Container, 
} from "react-bootstrap";

//TODO: Start function
export default function Market({title, columns, records}){

    //TODO: Fetch API
    
    
    return (
        //TODO: Show table market
        <Container>
            <h4 className="mt-3">Market {title}</h4>
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