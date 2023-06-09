import { 
    Container 
} from "react-bootstrap";
import { Breadcrumbs } from "../../components";

//TODO: Start Function
export default function Title({title, route, pageId}){
    return (
        <Container>
            <div className="d-flex justify-content-between  align-items-center">
                {title === 'Exchange'?
                <h2 className="fw-bold">{title} </h2>:
                <h2 className="fw-bold">{title} {pageId}</h2>}
                <Breadcrumbs title={title} route={route} />
            </div>
            <h5 className="text-secondary">Tracking harga coin favoritmu dalam satu aplikasi</h5>
        </Container>
    );
}