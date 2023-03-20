import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { 
    Cards, 
    Navigation, 
    Price 
} from "./components";

export default function DetailCoin({name, setName, title, currencySymbol, rates, symbol, setPage, setPageId}){
    const [data, setData] = useState({});

    useEffect(() => {
        axios.get(`https://api.coincap.io/v2/assets/${name}`)
          .then((response) => {
            setData(response.data.data);
            setName(response.data.data.name)
          })
          .catch((error) => {
            console.log(error);
          });
      }, [name, setName]);

    return(
        <Container>
            <Price 
                data={data} 
                currencySymbol={currencySymbol} 
                rates={rates} 
                symbol={symbol}
            />
            <Cards 
                data={data}
                currencySymbol={currencySymbol} 
                rates={rates} 
                symbol={symbol}
            />
            <Navigation 
                name={name} 
                data={data} 
                title={title} 
                currencySymbol={currencySymbol} 
                rates={rates} 
                symbol={symbol} 
                setPage={setPage}
                setPageId={setPageId}
            />
        </Container>
    );
}
