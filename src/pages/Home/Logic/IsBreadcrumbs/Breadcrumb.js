import { 
    Breadcrumb 
} from "react-bootstrap";
import { Tooltips } from "../../../../components";

// TODO: Start function
export default function isBreadCrumb (pointerHover, route) {
    if (pointerHover === 'Dashboard'){
        return <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
    } 
    
    return (
        <>  
            {/* TODO: Call Tooltips component */}
            <Tooltips
                title='Dashboard'
                content={
                    <Breadcrumb.Item onClick={() => route('Dashboard')}>Dashboards</Breadcrumb.Item>
                }
            />
            <Breadcrumb.Item active>{pointerHover}</Breadcrumb.Item>
        </>
    );
}