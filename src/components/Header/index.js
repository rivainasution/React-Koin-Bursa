import { faPieChart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image, Nav } from "react-bootstrap";
import logo from '../../assets/logo.png';

export default function Navigation(){
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
                '>
                    <Nav.Link 
                        href="/" 
                        className='t-3 t-hover'
                    >
                        Home
                    </Nav.Link>
                    <Nav.Link 
                        href="/market" 
                        className="t-3 t-hover"
                    >
                        Market
                    </Nav.Link>
                    
                </Nav>
                <Nav className='
                    col-lg-5
                    col-md-7
                    col-sm-7
                    d-flex flex-row 
                    align-items-center justify-content-end
                '>
                    <Nav.Link 
                        href="/" 
                        className='t-3 t-hover'
                    >
                        <div className='d-flex align-items-center justify-content-center'>
                            <FontAwesomeIcon icon={faStar} className='mx-1'/>
                            <span className="mx-1">Watchlist</span>
                        </div>
                    </Nav.Link>
                    <Nav.Link 
                        href="/market" 
                        className="t-3 t-hover"
                    >
                        <div className='d-flex align-items-center justify-content-center'>
                            <FontAwesomeIcon icon={faPieChart} className='mx-1'/>
                            <span className="mx-1">Portfolio</span>
                        </div>
                    </Nav.Link>
                </Nav>
            </div>
            
        </div>
    );
}