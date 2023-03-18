import { Nav } from 'react-bootstrap';

function DetailCoinHeader({navbar, setNavbar}) {
  const navigation = [
    {
      id: 0,
      menu: "Overview" 
    },
    {
      id: 1,
      menu: "Market" 
    },
    {
      id: 2,
      menu: "History"
    }
  ];

  const handleNavigationClick = (menu) => {
    setNavbar(menu);
  };

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

  return (
    <div className="
      Navbar-detail mb-2 
      d-flex flex-row
    ">
      {renderNavigation()}
    </div>
  );
}

export default DetailCoinHeader;
