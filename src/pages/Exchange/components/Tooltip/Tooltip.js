import { 
    OverlayTrigger, 
    Tooltip 
} from "react-bootstrap";
import { isTooltip } from "../../Logic";

//TODO: Start function
export default function Tooltips({title, content}){

    return (
        <OverlayTrigger
            placement='bottom'
            overlay={
                <Tooltip id='tooltip-bottom'>
                    {/* TODO: Call isTooltip function */}
                    {isTooltip(title)}
                </Tooltip>
            }
        > 
        {content} 
        </OverlayTrigger>
    );
}
