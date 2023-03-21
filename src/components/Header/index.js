import { faPieChart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image, Nav } from "react-bootstrap";
import logo from '../../assets/logo.png';

export default function Navigation({setPage, page}){

    const menu = [
        {
            id:0,
            value: 'Home',
            href: '/'
        }, 
        {
            id: 1, 
            value: 'Exchange',
            href:'/exchange'
        }
    ]

    const navbar = [
        {
            id: 0,
            value: 'Watchlist',
            href: '/watchlist',
            icon: faStar
        },
        {
            id: 1,
            value: 'Portfolio',
            href: '/portfolio',
            icon: faPieChart
        }
    ]

    const clikHandle = (menu) => {
        setPage(menu)
    }

    const menuHandle = () => {
        return menu.map(item=>(
            <Nav.Link 
                href={item.href} 
                className={`t-3 t-hover ${page === item.value ? "bg-primary text-light" : ""}`}
                key={item.id}
                onClick={()=>clikHandle(item.value)}
            >
                {item.value}
            </Nav.Link>
        ))
    }

    const navbarHandle = () => {
        return navbar.map(item => (
            <Nav.Link 
                href={item.href}
                className={`t-3 t-hover ${page === item.value ? "bg-primary text-light" : ""}`}
                key={item.id}
                onClick={()=>clikHandle(item.value)}
            >
                <div 
                    className='d-flex align-items-center justify-content-center'
                >
                    <FontAwesomeIcon icon={item.icon} className='mx-1'/>
                    <span className="mx-1">{item.value}</span>
                </div>
            </Nav.Link>
        ))
    }

    return(
        <div className="
                d-flex 
                flex-column flex-lg-row flex-md-row flex-sm-column
                border
                shadow-sm
                py-2
            ">
            <Nav.Link href="/" className="
                col-lg-2
                col-md-3
                col-sm-12
                text-center
                d-flex flex-row 
                align-items-center justify-content-center
            ">
                <Image src={logo} 
                    width="45" 
                    alt="logo koin burs"
                    className="rounded-circle mx-1" 
                />
                <span className="mx-1 t-3 t-hover">
                    Koin Bursa
                </span>
            </Nav.Link>
            <div className="
                d-flex
                flex-column flex-lg-row flex-md-row flex-sm-row
                justify-content-around align-items-center
                col-lg-10
                col-md-9
                col-sm-12
            ">
                <Nav className='
                    col-lg-7
                    col-md-5
                    col-sm-5
                    d-flex flex-row 
                    align-items-center justify-content-start
                    '
                >
                    {menuHandle()}
                    
                </Nav>
                <Nav className='
                    col-lg-5
                    col-md-7
                    col-sm-7
                    d-flex flex-row 
                    align-items-center justify-content-end
                    '
                >
                    {navbarHandle()}
                </Nav>
            </div>
        </div>
    );
}
