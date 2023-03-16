import { Line } from "react-chartjs-2";
import { Container } from "react-bootstrap";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)


export default function Chart({time, prices, title, color}){
    // Chart  data
    const chart = {
        labels: time,
        datasets: [
            {
                label: `${title} price`,
                data: prices,
                fill: true,
                backgroundColor: "rgba(6, 156,51, .3)",
                borderColor: () => isPriceDown(color),
            }
        ]
    };

    const isPriceDown = (color) => {
        if (color < 0){
            return "#ff0000";
        } else {
            return "#02b844";
        }
    }

    return (
        <Container>
            <Line data={chart}></Line>
        </Container>
    );
}