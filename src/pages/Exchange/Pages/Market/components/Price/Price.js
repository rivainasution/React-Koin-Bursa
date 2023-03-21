//TODO: Import libraries or directories
import { 
    Badge 
} from "react-bootstrap";

//TODO: Start Function
export default function Price ({data, url}){
    return (
        //TODO: Show rank and price
        <div className="d-flex align-items-start justify-content-between flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row mb-3">
            {/* TODO: Show Rank */}
            <div className="d-flex my-2">
                <Badge bg='secondary'>
                    #Rank {data.rank}
                </Badge>
                <Badge bg='light t-pointer' className="mx-1">
                    <a href={url} target='_blank' rel='noopener noreferrer'>Explorers</a>
                </Badge>
            </div>
        </div>
    );
}