import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const NavigationBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className='d-flex justify-content-between' color="light" light expand="md">
        <NavbarBrand href="/">MyApp</NavbarBrand>
        <NavbarToggler onClick={toggle} />
          <Nav className="mr-none" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link to='/pages/admin'>Admin Page</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to='/pages/about'>About Us</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to='/pages/contacts'>Contacts</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to='/pages/feedback'>Feedback</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to='/pages/partners'>Partners</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to='/pages/products'>Products</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
      </Navbar>
    </div>
  );
};

export default NavigationBar;