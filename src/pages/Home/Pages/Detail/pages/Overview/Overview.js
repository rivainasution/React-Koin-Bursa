import { useEffect, useState } from "react";
import { Container, Nav } from "react-bootstrap";
import { Charts, ComingSoon } from "./pages";

export default function Overview({title, history, data, setInterval, interval}){
    const [time, setTime] = useState([]);
    const [prices, setPrices] = useState([]);
    const [navbar, setNavbar] = useState('Price');

    useEffect(() => {
        const sortedHistory = history.sort((a, b) => a.time - b.time);
        const formattedTime = sortedHistory.map((dt) => TimeFormat(dt.time));
        const formattedPrices = sortedHistory.map((dt) => dt.priceUsd);
        setTime(formattedTime);
        setPrices(formattedPrices);
    }, [history]);
    
    const handleIntervalClick = (value) => {
        setInterval(value);
    };

    const handleNavigationClick = (menu) => {
        setNavbar(menu);
      };

    const navigation = [
        {
          id: 0,
          menu: "Price" 
        },
        {
          id: 1,
          menu: "Coming Soon 1" 
        },
        {
          id: 2,
          menu: "Coming Soon 2"
        }
    ];

    const intervals = [
        {
          id: 0,
          value: "m1",
          label: "1m"
        },
        {
          id: 1,
          value: "m5",
          label: "5m"
        },
        {
          id: 2,
          value: "m15",
          label: "15m"
        },
        {
          id: 3,
          value: "m30",
          label: "30m"
        },
        {
          id: 4,
          value: "h1",
          label: "1h"
        },
        {
          id: 5,
          value: "h2",
          label: "2h"
        },
        {
          id: 6,
          value: "h6",
          label: "6h"
        },
        {
          id: 7,
          value: "h12",
          label: "12h"
        },
        {
          id: 8,
          value: "d1",
          label: "1d"
        },
    ];

    const content = () => {
        if (navbar === 'Price'){
            return <Charts time={time} prices={prices} title={title} data={data} />
        } else if (navbar === 'Coming Soon 1' || navbar === 'Coming Soon 2'){
            return <ComingSoon />
        }
    } 

    const renderNavigation = () => {
        return navigation.map((item) => (
          <Nav.Link
            key={item.id}
            className={`p-2 mx-1 navs-detail ${
              navbar === item.menu ? "bg-primary text-light" : ""
            }`}
            onClick={() => handleNavigationClick(item.menu)}
          >
            {item.menu}
          </Nav.Link>
        ));
      };

    const renderIntervals = () => {
        return intervals.map((item) => (
          <Nav.Link
            key={item.id}
            className={`p-1 mx-1 navs-detail ${
              interval === item.value ? "bg-primary text-light" : ""
            }`}
            onClick={() => handleIntervalClick(item.value)}
          >
            {item.label}
          </Nav.Link>
        ));
    };

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
            <div className="
                Navbar-detail mb-2
                d-flex flex-column flex-lg-row flex-md-row
                align-items-center
                justify-content-between
                ">
                <div className='d-flex flex-row'>{renderNavigation()}</div>
                <div className='d-flex flex-row'>{renderIntervals()}</div>
            </div>
            {content()}
        </Container>
    );
}
