import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { 
    Cards, 
    Navigation, 
    Price 
} from "./components";

export default function DetailCoin({name, setName, title}){
    const [data, setData] = useState({});
    const [color, setColor] = useState('');

    useEffect(() => {
        axios.get(`https://api.coincap.io/v2/assets/${name}`)
          .then((response) => {
            setData(response.data.data);
            setName(response.data.data.name)
          })
          .catch((error) => {
            console.log(error);
          });
      }, [name]);

    return(
        <Container>
            <Price data={data} setColor={setColor}/>
            <Cards 
                data={data}
            />
            <Navigation 
                name={name} 
                color={color} 
                title={title} 
            />
        </Container>
    );
}