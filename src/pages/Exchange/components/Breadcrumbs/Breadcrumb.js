import { 
    Breadcrumb 
} from "react-bootstrap";
import { isBreadCrumb } from "../../Logic";



//TODO: Start function
export default function Breadcrumbs({title, route}){

    return(
        <Breadcrumb>
            {/* TODO: Call isBreadCrumb function */}
            {isBreadCrumb(title, route)}
        </Breadcrumb>
    );
}
