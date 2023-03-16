import { 
    OverlayTrigger, 
    Tooltip 
} from "react-bootstrap";
import { isTooltips } from "../../pages/Home/Logic";

//TODO: Start function
export default function Tooltips({title, content}){

    return (
        <OverlayTrigger
            placement='bottom'
            overlay={
                <Tooltip id='tooltip-bottom'>
                    {/* TODO: Call isTooltip function */}
                    {isTooltips(title)}
                </Tooltip>
            }
        > 
        {content} 
        </OverlayTrigger>
    );
}
