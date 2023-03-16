//TODO: Import libraries or directories
import { Container } from "react-bootstrap";
import { Charts } from "./components";

export default function Overview({title, data, color}){
    const time = [];
    const prices = [];

    const pushPrice = (price) => {
        prices.splice(0,0, price);
    }

    const pushTime = (date) => {
        const dateFormat = TimeFormat(date);
        time.splice(0,0, dateFormat);
    }

    function TimeFormat(time){
        let newTime = time.toString();
        let hr = newTime.slice(0,2);
        let mnt = newTime.slice(2,4);
        let scn = newTime.slice(4,6);
        return hr+':'+mnt+':'+scn;
    }

    return (
        <Container className='border mx-3 p-3'>
            <h4>Chart Overview {title}</h4>
            {data.map((dt)=>(
                <tr key={dt.priceUsd}>
                    {pushTime(dt.time)}
                    {pushPrice(dt.priceUsd)}
                </tr>
            ))}
            <Charts time={time} prices={prices} title={title} color={color} />
        </Container>
    );
}