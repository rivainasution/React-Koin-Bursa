import { 
    Breadcrumb 
} from "react-bootstrap";
import { Tooltips } from "../../components";

// TODO: Start function
export default function isBreadCrumb (pointerHover, route) {
    if (pointerHover === 'Exchange'){
        return <Breadcrumb.Item active>Exchange</Breadcrumb.Item>
    } 
    
    return (
        <>  
            {/* TODO: Call Tooltips component */}
            <Tooltips
                title='Exchange'
                content={
                    <Breadcrumb.Item onClick={() => route('Exchange')}>Exchange</Breadcrumb.Item>
                }
            />
            <Breadcrumb.Item active>{pointerHover}</Breadcrumb.Item>
        </>
    );
}