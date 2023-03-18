import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Modals({currencySymbol, setCurrencySymbol, setRates, setLgShow, setSymbol}) {
    const [data, setData] = useState([]);
    const [searchSymbol, setSearchSymbol] = useState("");

    useEffect(() => {
        axios
        .get("https://api.coincap.io/v2/rates")
        .then((response) => {
            setData(response.data.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    const converToUppercase = (str) => {
        let words = str.split(" ");
        for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
        return words.join(" ");
    };

    const handleSearch = (event) => {
        setSearchSymbol(event.target.value);
    };

    const rateHandle = (currencySymbol, rate, symbol) => {
        setCurrencySymbol(currencySymbol);
        setRates(rate);
        setSymbol(symbol)
        setLgShow(false)
    }

    return (
        <Container>
            <Row>
                <Col md={12} className="m p-2">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search by symbol"
                    value={searchSymbol}
                    onChange={handleSearch}
                />
                </Col>
            </Row>
            <Row>
                {data
                .filter(
                    (rate) =>
                    rate.symbol.toLowerCase().includes(searchSymbol.toLowerCase()) ||
                    rate.id.toLowerCase().includes(searchSymbol.toLowerCase())
                )
                .map((rate) => (
                    <Col
                        md={4}
                        className={`${
                            currencySymbol === rate.symbol
                            ? "bg-warning border"
                            : ""
                        } m p-2 rounded`}
                        key={rate.id}
                        onClick={()=>rateHandle(rate.symbol, rate.rateUsd, rate.currencySymbol)}
                    >
                        <div className="d-flex flex-column">
                            <span className="fw-bold">{converToUppercase(rate.id)}</span>
                            <span>
                            {rate.symbol} - {rate.currencySymbol}
                            </span>
                            <span>{converToUppercase(rate.type)}</span>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
