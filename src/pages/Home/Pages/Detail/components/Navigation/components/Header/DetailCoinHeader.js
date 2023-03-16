import {
    Nav,
  } from 'react-bootstrap';
  
  function DetailCoinHeader(prop) {
    const navigation = ["Overview", "Market", "History"];
  
    const menuNavigation = () => {
      return navigation.map((item) => {
        return <Nav.Link className='p-2 mx-1 navs-detail' onClick={() => prop.onClick(item)}>{item}</Nav.Link>
      }) 
    }
    
  
    return(
      <div class="Navbar-detail mb-2">
        {menuNavigation()}
      </div>
    );
  }
  
  export default DetailCoinHeader;